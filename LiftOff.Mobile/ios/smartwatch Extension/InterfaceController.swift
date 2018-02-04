import WatchKit
import Foundation
//Paket koji nam omogućava komunikaciju smartwatcha i iPhonea
import WatchConnectivity

//Strukture koje pomažu u procesu bilježenja leta
struct Drone : Codable {
    var name: String = ""
}

struct FlightLocation : Codable {
    var flightSpot: String = ""
    var longitude: Double = 0.0
    var latitude: Double = 0.0
}

struct FlightTime : Codable {
    var flightStartTime: Date = Date.init()
}

struct Flight : Codable {
    var timeFlown: Int = 0
    var flySafeScore: Double = 0
    var drone: Drone
    var flightLocation: FlightLocation
    var flightTime: FlightTime
    
    init() {
        timeFlown = 0
        flySafeScore = 0
        drone = Drone()
        flightLocation = FlightLocation()
        flightTime = FlightTime()
    }
    
    //Funkcija zaslužna za spremanje leta u korisnikove statistike
    func LogFlight(token: String) -> Void {
        var request: URLRequest = URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/logging/logFlight")!)
        request.httpMethod = "POST"
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        
        do {
            let body = try JSONEncoder().encode(self)
            request.httpBody = body
            print(self)
        } catch {
            print("error")
        }
        
        let task = URLSession.shared.dataTask(with: request, completionHandler: {_,_,_ in })
        task.resume()
    }
}

//Strukture koje pomažu u komunikaciji sa serverom, točnije sa traženjem tokena, imena drona i WeatherRatinga
struct Location : Codable {
    var longitude: Double = 0.0
    var latitude: Double = 0.0
    
    init() {
        longitude = 0.0
        latitude = 0.0
    }
}

struct TimeLocation : Codable {
    var location: Location
    var time: String = ""
    
    init() {
        location = Location()
        time = ""
    }
}

struct DeviceIDDTO : Codable {
    var deviceID: String
    
    init() {
        deviceID = ""
    }
}

//Klasa zaslužna za glavno sučelje
class InterfaceController: WKInterfaceController, CLLocationManagerDelegate, WCSessionDelegate {
    //Funkcija koje je dio WCSessionDelegate sučelja
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}
    
    //Funkcija koja se pokreće pri aktivaciji i koja će sadržavati podatke (ako takvi postoje) poslane sučelju
    public override func awake(withContext context: Any?) {
        super.awake(withContext: context)
    }
    
    //Varijabla koja je zaslužna za komunikaciju s iPhoneom
    var session: WCSession!
    //Varijabla koja kontrolira traženje lokacije
    let locationManager = CLLocationManager()
    
    //Funckija koja se pokreće pri aktivaciji sučelja
    public override func willActivate() {
        super.willActivate()
        
        //Setup traženja lokacije
        locationManager.requestWhenInUseAuthorization()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.requestLocation()
        locationManager.startUpdatingLocation()
        
        //Započinjanje komunikacije s iPhoneom
        if WCSession.isSupported() {
            session = WCSession.default
            session.delegate = self as WCSessionDelegate
            session.activate()
        }
        
        //Pokretanje funkcije koja provjerava token i ime drona na serveru
        deviceInfoGetterTimer = Timer.scheduledTimer(timeInterval: 2, target: self, selector: #selector(getDeviceDataCounter), userInfo: nil, repeats: true)
    }
    
    //Funckija koja se pokreće pri deaktivaciji sučelja
    public override func didDeactivate() {
        super.didDeactivate()
    }
    
    //Funkcija koja se pokreće kada se promijeni lokacija
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard !locations.isEmpty else { return }
        
        DispatchQueue.main.async {
            let lastLocation = locations.last!
            let lastLocationCoordinate = lastLocation.coordinate
            
            let latDifference = abs(InterfaceController.flight.flightLocation.latitude - lastLocationCoordinate.latitude)
            let longDifference = abs(InterfaceController.flight.flightLocation.longitude - lastLocationCoordinate.longitude)
            
            if((latDifference > 0.5 || longDifference > 0.5) && self.token != "") {
                self.GetScores(token: InterfaceController.token)
            }
            
            InterfaceController.flight.flightLocation.latitude = lastLocationCoordinate.latitude
            InterfaceController.flight.flightLocation.longitude = lastLocationCoordinate.longitude
        }
    }
    
    //Funkcija koja se pokreće kada lokacija naiđe na problem
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {}
    
    //Funkcija koja se pokreće kada se promjeni status autorizacije za pristup lokaciji
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        DispatchQueue.main.async {
            switch status {
            case .authorizedWhenInUse:
                manager.requestLocation()
            case .denied:
                self.FlySafeButton.setTitle("Location not enabled")
            default:
                break
            }
        }
    }
    
    //Pomoćne funkcije za traženje tokena i imena drona sa servera
    var deviceID = ""
    var deviceInfoGetterTimer: Timer!
    var gotData: Bool = false
    var token: String? = ""
    var deviceInfoGetterTimerCounting: Bool = false
    
    @objc func getDeviceDataCounter() {
        if(deviceID != "") {
            GetDeviceData(deviceID: deviceID)
        }
    }
    
    //Slanje upita za ime drona i token
    func GetDeviceData(deviceID: String) {
        var request: URLRequest = URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/smartwatch/getDeviceInfo")!)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        do {
            var device = DeviceIDDTO()
            device.deviceID = deviceID
            let body = try JSONEncoder().encode(device)
            request.httpBody = body
        } catch {
            print("error")
        }
        
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
            do {
                if let json = try JSONSerialization.jsonObject(with: data!, options: []) as? [String: Any] {
                    if let droneName = json["droneName"] as? String {
                        InterfaceController.flight.drone.name = droneName
                    }
                    if let token = json["token"] as? String {
                        InterfaceController.token = token
                        
                        if(!self.gotData) {
                            self.gotData = true;
                            self.GetScores(token: InterfaceController.token)
                        }
                    }
                }
            } catch let error { print(error) }
        })
        task.resume()
    }
    
    //Funkcija koja se pokreće kada iPhone pošalje nove podatke
    func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        LiftOffButton.setTitle("LiftOff")
        LiftOffButton.setEnabled(true)
        LiftOffButton.setAttributedTitle(NSAttributedString(string: "LiftOff", attributes: [NSAttributedStringKey.font: UIFont.systemFont(ofSize: 18.0), NSAttributedStringKey.foregroundColor: UIColor.white]))
        
        if(applicationContext.keys.contains("DeviceID")) {
            deviceID = applicationContext["DeviceID"] as! String
        }
    }
    
    //Funkcija koja dohvaća podatke o vremenu s apija
    func GetScores(token: String) -> Void {
        var request: URLRequest = URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/weather/getScore")!)
        request.httpMethod = "POST"
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        do {
            var timeLocation: TimeLocation = TimeLocation()
            timeLocation.location.latitude = InterfaceController.flight.flightLocation.latitude
            timeLocation.location.longitude = InterfaceController.flight.flightLocation.longitude
            
            var add = DateComponents.init()
            add.hour = 1
            let date = Calendar.current.date(byAdding: add, to: Date.init())!
            timeLocation.time = ISO8601DateFormatter.init().string(from: date)
            print(timeLocation)
            let body = try JSONEncoder().encode(timeLocation)
            request.httpBody = body
            
        } catch {
            print("error")
        }
        
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
            do {
                if let json = try JSONSerialization.jsonObject(with: data!, options: .mutableContainers) as? NSObject {
                    self.scores = json
                    
                    let score = self.scores.value(forKey: "totalRating")! as! Double
                    InterfaceController.flight.flySafeScore = score
                    
                    InterfaceController.flight.flightLocation.flightSpot = (json.value(forKey: "weatherData") as! NSObject).value(forKey: "city")! as! String
                    
                    self.FlySafeButton.setTitle("FlySafe:     \(String(format: "%.1f", score))")
                    self.FlySafeButton.setBackgroundColor(UIColor.color(fromHexString: TableInterfaceController.GetColor(score: score)))
                    self.FlySafeButton.setEnabled(true)
                }
            } catch let error { print(error) }
        })
        task.resume()
    }
    
    //WeatherRating objekt kojeg šaljemo listi koja se nalazi na idućem sučelju
    var scores: NSObject = NSObject()
    
    //Funkcija koja šalje podatke slijedećem sučelju (tablici ocjena)
    override public func contextForSegue(withIdentifier segueIdentifier: String) -> Any? {
        return scores
    }
    
    //Referencing Outleti za elemente sučelja
    @IBOutlet var LiftOffButton: WKInterfaceButton!
    @IBOutlet var Stopwatch: WKInterfaceTimer!
    @IBOutlet var FlySafeButton: WKInterfaceButton!
    
    //Funckija koja se pokreće na pritisak LiftOff gumba i koja pokreće štopericu
    @IBAction func LiftOffAction() {
        if isCounting{
            isCounting = false
            InterfaceController.flight.timeFlown = seconds
            seconds = 0
            Stopwatch.stop()
            stopwatchTimer!.invalidate()
            LiftOffButton.setTitle("LiftOff")
            presentAlert(withTitle: "Log", message: "Do you want to log this flight?", preferredStyle: .sideBySideButtonsAlert, actions: [ok, cancel])
        }
        else{
            isCounting = true
            Stopwatch.setDate(NSDate().addingTimeInterval(0) as Date)
            Stopwatch.start()
            
            stopwatchTimer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(InterfaceController.counter), userInfo: nil, repeats: true)
            
            LiftOffButton.setTitle("Land")
            InterfaceController.flight.flightTime.flightStartTime = Date.init()
        }
    }
    
    //Handler funkcije koje se pokreću ovisno o izboru kojeg je korisnik odabrao pri upitu hoće li spremiti let
    var ok = WKAlertAction.init(title: "Yes", style: WKAlertActionStyle.default, handler: {
        InterfaceController.flight.LogFlight(token: token)
    })
    
    var cancel = WKAlertAction.init(title: "No", style: WKAlertActionStyle.default, handler: {})
    
    //Pomoćne varijable i funkcije za brojanje vremena štoperice
    var seconds = 0
    var stopwatchTimer : Timer?
    var isCounting = false
    static var token = "token"
    static var flight = Flight()
    
    @objc func counter() {
        seconds += 1
    }
}
