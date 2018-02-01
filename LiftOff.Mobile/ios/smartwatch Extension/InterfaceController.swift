//Objekt s appa
//[
//    "Token": {
//        "token": token...
//    },
//    "Drone": {
//        "name:" droneName
//    },
//    "Scores":
//     [
//            {
//                "category": "Wind",
//                "score": 4.5
//            },
//            {
//                "category": "Wind",
//                "score": 4.5
//            },
//            {
//                "category": "Wind",
//                "score": 4.5
//            },
//            {
//                "category": "Wind",
//                "score": 4.5
//            },
//            {
//                "category": "Wind",
//                "score": 4.5
//            },
//            {
//                "category": "Wind",
//                "score": 4.5
//            }
//     ],
//    "Location": {
//        "latitude": 12,
//        "longitude": 34,
//        "spot": "Split"
//    }
//]


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
    var longitude: Double = 0
    var latitude: Double = 0
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
        
        //    URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
        //
        //    })
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
    
    //Funckija koja se pokreće pri aktivaciji sučelja
    public override func willActivate() {
        super.willActivate()
        
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
    
    //Funkcija koja se pokreće kada iPhone pošalje nove podatke
    func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        print(applicationContext)
        
//        do {
//            let recivedScores = applicationContext["Scores"] as? [NSObject]
//            let recivedDrone = applicationContext["Drone"] as? NSObject
//            let recivedToken = applicationContext["Token"] as? NSObject
//            let recivedLocation = applicationContext["Location"] as? NSObject
//            
//            if (recivedScores != nil) {
//                FlySafeButton.setEnabled(true)
//                scores = recivedScores! as [NSObject?]
//                FlySafeButton.setTitle("FlySafe:     \(String(describing: scores[0]?.value(forKey: "score")))")
//                FlySafeButton.setBackgroundColor(UIColor.color(fromHexString: TableInterfaceController.GetColor(score: scores[0]?.value(forKey: "score") as! Double)))
//            }
//            if (recivedToken != nil) {
//                InterfaceController.token = recivedToken?.value(forKey: "token") as! String
//            }
//            if (recivedDrone != nil) {
//                InterfaceController.flight.drone.name = recivedDrone?.value(forKey: "name") as! String
//            }
//            if (recivedLocation != nil) {
//                InterfaceController.flight.flightLocation.flightSpot = recivedLocation?.value(forKey: "spot") as! String
//                InterfaceController.flight.flightLocation.longitude = recivedLocation?.value(forKey: "longitude") as! Double
//                InterfaceController.flight.flightLocation.latitude = recivedLocation?.value(forKey: "latitude") as! Double
//            }
//        }
    }
    
    //Lista ocjena koje šaljemo listi koja se nalazi na idućem sučelju
    var scores = [NSObject?]()
    
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
