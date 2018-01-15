//
//  InterfaceController.swift
//  StopwatchTestApp WatchKit Extension
//
//  Created by Toma Puljak on 1/12/18.
//  Copyright © 2018 Toma Puljak. All rights reserved.
//

import WatchKit
import Foundation
import WatchConnectivity

public class InterfaceController: WKInterfaceController {

    public override func awake(withContext context: Any?) {
        super.awake(withContext: context)
    }
    
    public override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        super.willActivate()
        
        if WCSession.isSupported() {
            let session = WCSession.default()
            session.delegate = self as? WCSessionDelegate
            session.activate()
        }
        
        //PopulateTable()
    }
    
    func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        let recivedScores = applicationContext["scores"] as? [NSObject]
        scores = recivedScores!
        FlySafeButton.setTitle(scores[0]?.value(forKey: "category") as? String)
    }
    
    public override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
    }
    
    override public func contextForSegue(withIdentifier segueIdentifier: String) -> Any? {
        return scores
    }
    
    @IBOutlet var LiftOffButton: WKInterfaceButton!
    @IBOutlet var Stopwatch: WKInterfaceTimer!
    @IBOutlet var FlySafeButton: WKInterfaceButton!
    
    @IBAction func LiftOffAction() {
        if isCounting{
            isCounting = false
            seconds = 0
            Stopwatch.stop()
            myTimer!.invalidate()
            LiftOffButton.setTitle("LiftOff")
            presentAlert(withTitle: "Log", message: "Do you want to log this flight?", preferredStyle: .sideBySideButtonsAlert, actions: [ok, cancel])
        }
        else{
            isCounting = true
            Stopwatch.setDate(NSDate().addingTimeInterval(0) as Date)
            myTimer = Timer.scheduledTimer(timeInterval: 1, target: self, selector:#selector(InterfaceController.counter), userInfo: nil, repeats: true)
            Stopwatch.start()
            LiftOffButton.setTitle("Land")
        }
    }
    
    var ok = WKAlertAction.init(title: "Yes", style: WKAlertActionStyle.default, handler: {
        print("logged")
    })
    
    var cancel = WKAlertAction.init(title: "No", style: WKAlertActionStyle.default, handler: {})
    
    var seconds = 0
    
    func counter() {
        seconds = seconds + 1
    }
    
    var myTimer : Timer?
    
    var isCounting = false
    var scores = [NSObject?]()
    
//    func PopulateTable() {
//        let token = "VJbGi_icRlxW_EIOsd0pMMT3A_hlvnJU9y8dd6PTFkEa9jXJ3K38TIXjhcq_CwiCBAN60nRHsr4swUr7GDQGKyVvMMdwf814DJoFSRRpl_o1LH32uYJcFVUuf2-6Ify582ewnU_xoyEEpa6YKPSHyXkmd9YqTvV9wvvBuPTdWe_Ztpx7NJ6j4UgC_Beu5kAtGDQyfC8LmMScJDoLsy61wyEcuE0oYDzyEBRKVbQ4nchzfJGiZm31vnpvM_sCga26zA6kHY78r9Ex2QcgOGtD9vpXQ0_In2J5kBOMGKC0DqJ5CuPux6wEhojTFgrP0JECaCeS88mf0bYsLTOkBvrFa3M27962w9bIPMMvR9_mAWs"
//        
//        var request: URLRequest =  URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/drones/getDrones")!)
//        request.httpMethod = "GET"
//        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
//        
//        URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
//            if(error != nil) {
//                print("Response error")
//            }
//            else {
//                if let content = data {
//                    do {
//                        let myJSON = try JSONSerialization.jsonObject(with: content, options: .mutableContainers) as! [NSObject]
//                        
//                        if(myJSON[0].value(forKey: "message") == nil) {
//                            self.scores = myJSON
//                            self.FlySafeButton.setEnabled(true)
//                        }
//                        else {
//                            print(myJSON[0].value(forKey: "message") ?? "no message")
//                        }
//                    }
//                    catch {
//                        print("Error parsing JSON")
//                    }
//                }
//            }
//        }).resume()
//    }
}
