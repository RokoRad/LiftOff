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
        
    }
    
    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        
        super.willActivate()
        PopulateTable()
    }
    
    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
        
    }
    
    @IBOutlet var Table: WKInterfaceTable!
    
    @IBOutlet var LoadingLabel: WKInterfaceLabel!
    
    var items = ["1", "2", "3", "4"]
    
    func PopulateTable() {
        
        let token = "tdgYNr78WCjfWXDLPmfSdGyQQenDIhykl1FU8Cx_bIsmmchrldqP_VvjSrgkp_zWvVmtejz3uq36XUBuF7HteFbQtBOc8X3NvxrKvyJoNRxNV1I_W8sQe62dPPLIzBOplsLxpT4JNZA7fXYQvz9SCdeXaIIB5JbGE_P2QxTx6cr0QuOjWGyk4n_yUGqxMPcaO4Re84X3yt8YQ5-_ksg-GCiuvWaFWF_eRxATDInrW6dJgGIOmQv7cTXVtA4jz4HOFJ_W0YcZTUdFQMqFwKZw-nFr2RhwZtuRyLVb9mtVzEJu93SdB3xtxlg-htm_cOb3lrFjzTHR570kQfXRN8whuGrWItaaFisiTXMnMR-YoQo"
        
        var request: URLRequest =  URLRequest(url: URL(string: "http://liftoffapi.azurewebsites.net/api/drones/getDrones")!)
        request.httpMethod = "GET"
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")

        URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) -> Void in
            if(error != nil) {
                print("Response error")
            }
            else {
                if let content = data {
                    do {
                        let myJSON = try JSONSerialization.jsonObject(with: content, options: .mutableContainers) as! [NSObject]
                        
                        self.LoadingLabel.setHidden(true)
                        
                        print(myJSON[0].value(forKey: "name") ?? "no value")
                        
                        self.Table.setNumberOfRows(myJSON.count, withRowType: "TotalScoreRow")
                        
                        for i in 0...myJSON.count-1 {
                            let row = self.Table.rowController(at: i) as! TableRow
                            row.FlySafeLabel.setText(myJSON[i].value(forKey: "name") as? String ?? "no name")
                            row.ScoreLabel.setText(String((myJSON[i].value(forKey: "topSpeed") as? Int)!))
                        }
                    }
                    catch {
                        print("Error parsing JSON")
                    }
                }
            }
        }).resume()
    }
}
