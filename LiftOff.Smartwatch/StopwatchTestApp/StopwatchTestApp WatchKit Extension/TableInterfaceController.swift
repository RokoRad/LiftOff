//
//  TableInterfaceController.swift
//  StopwatchTestApp
//
//  Created by Toma Puljak on 1/12/18.
//  Copyright © 2018 Toma Puljak. All rights reserved.
//

import WatchKit
import Foundation
import UIKit


struct Drone {
    let id: Int
    let name: String
    let topSpeed: Int!
    let users: Array<Any>
}

class TableInterfaceController: WKInterfaceController {
    
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        
        // Configure interface objects here.
        if let newContext = context as? [NSObject] {
            if (newContext.count != 0) {
                LoadingLabel.setHidden(true)
                self.Table.setNumberOfRows(newContext.count, withRowType: "TotalScoreRow")
                for i in 0...newContext.count - 1 {
                    let row = Table.rowController(at: i) as! TableRow
                    row.FlySafeLabel.setText(newContext[i].value(forKey: "category") as? String ?? "no category")
                    row.ScoreLabel.setText(newContext[i].value(forKey: "score") as? String ?? "/")
                }
            }
        }
    }
    
    func reloadRootControllers(withNames string: [String], contexts: [Any]?) {}
    
    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        
        super.willActivate()
        //PopulateTable()
    }
    
    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
        
    }
    
    @IBOutlet var Table: WKInterfaceTable!
    
    @IBOutlet var LoadingLabel: WKInterfaceLabel!
}
