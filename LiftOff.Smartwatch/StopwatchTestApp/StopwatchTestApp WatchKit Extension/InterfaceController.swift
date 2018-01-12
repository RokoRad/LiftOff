//
//  InterfaceController.swift
//  StopwatchTestApp WatchKit Extension
//
//  Created by Toma Puljak on 1/12/18.
//  Copyright © 2018 Toma Puljak. All rights reserved.
//

import WatchKit
import Foundation


class InterfaceController: WKInterfaceController {

    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        
        // Configure interface objects here.
    }
    
    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        
        super.willActivate()
    }
    
    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
    }
    
    @IBOutlet var LiftOffButton: WKInterfaceButton!
    @IBOutlet var Stopwatch: WKInterfaceTimer!

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
}
