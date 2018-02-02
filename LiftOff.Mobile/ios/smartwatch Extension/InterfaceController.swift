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
    var longitude: Double = 16.4
    var latitude: Double = 43.5
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
        
//        URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
//
//        })
    }
}

struct Location : Codable {
    var longitude: Double = 16.4
    var latitude: Double = 43.5
    
    init() {
        longitude = 16.4
        latitude = 43.5
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
    
    //Varijabla koja je zaslušna za komunikaciju s iPhoneom
    var session: WCSession!
    let manager = CLLocationManager()
    
    //Funckija koja se pokreće pri aktivaciji sučelja
    public override func willActivate() {
        super.willActivate()
        
        manager.requestWhenInUseAuthorization()
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyBest
        manager.requestLocation()
        manager.startUpdatingLocation()
        
        //Započinjanje komunikacije s iPhoneom
        if WCSession.isSupported() {
            session = WCSession.default
            session.delegate = self as WCSessionDelegate
            session.activate()
        }
    }
    
    //Funckija koja se pokreće pri deaktivaciji sučelja
    public override func didDeactivate() {
        super.didDeactivate()
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard !locations.isEmpty else { return }
        
        DispatchQueue.main.async {
            let lastLocationCoordinate = locations.last!.coordinate
            
            InterfaceController.flight.flightLocation.latitude = lastLocationCoordinate.latitude
            InterfaceController.flight.flightLocation.longitude = lastLocationCoordinate.longitude
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {}
    
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
    
    var deviceID = ""
    //Funkcija koja se pokreće kada iPhone pošalje nove podatke
    func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        LiftOffButton.setTitle("LiftOff")
        LiftOffButton.setEnabled(true)
        LiftOffButton.setAttributedTitle(NSAttributedString(string: "LiftOff", attributes: [NSAttributedStringKey.font: UIFont.systemFont(ofSize: 18.0), NSAttributedStringKey.foregroundColor: UIColor.white]))
        
        if(applicationContext.keys.contains("DeviceID")) {
            deviceID = applicationContext["DeviceID"] as! String
        }
        
        var request: URLRequest = URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/smartwatch/getDeviceToken")!)
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
                    print(json)
                    let token = "lb7QFE6z7gWg93UL60E_-1neg1jBRfqnlUYSuL7CIDvitHT_btzG6i2hTXIupfdNiyU5GgyXF7ZK2Y-8DbkMw2fjf0gM43aTD79RoUdJOHFtPagpj7ZuvckQWQ7V9V731s7BHYtVqKQmldNpnipLNdWjob9L8t-Bb1yzj9PjHFaAeDrIfQVdXcun1XB_-97v0usgYS_JdtUBGaFkF1BdfcjaiyBTejCPe2noFGn_GxH6ppushrJcdzKOUSK4UNGMc_t3LYJSWbvOeXPfX19hDv53UA-08YUEwAZEP3qAlKEnIkS5xe6vrHBDoHN0EK5Kzp2MxJAFMUUt9V3VQb6RTQ"
                    self.GetScores(token: token)
                }
            } catch let error { print(error) }
        })
        task.resume()
    }
    
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
            print(timeLocation.time)
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
            myTimer!.invalidate()
            LiftOffButton.setTitle("LiftOff")
            presentAlert(withTitle: "Log", message: "Do you want to log this flight?", preferredStyle: .sideBySideButtonsAlert, actions: [ok, cancel])
        }
        else{
            isCounting = true
            Stopwatch.setDate(NSDate().addingTimeInterval(0) as Date)
            Stopwatch.start()
            myTimer = Timer.scheduledTimer(timeInterval: 1, target: self, selector:#selector(InterfaceController.counter), userInfo: nil, repeats: true)
            LiftOffButton.setTitle("Land")
            InterfaceController.flight.flightTime.flightStartTime = Date.init()
        }
    }
    
    //Handler funkcije koje se pokreću ovisno o izboru kojeg je korisnik odabrao pri upitu hoće li spremiti let
    var ok = WKAlertAction.init(title: "Yes", style: WKAlertActionStyle.default, handler: {
        InterfaceController.flight.LogFlight(token: token)
    })
    
    var cancel = WKAlertAction.init(title: "No", style: WKAlertActionStyle.default, handler: {})
    
    //Pomoćne varijable i funkcije
    var seconds = 0
    var myTimer : Timer?
    var isCounting = false
    static var token = "token"
    static var flight = Flight()
    
    @objc func counter() {
        seconds += 1
    }
}
