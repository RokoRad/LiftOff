import WatchKit
import Foundation
import UIKit

//Klasa zadužena za sučelje tablice ocjena
class TableInterfaceController: WKInterfaceController {
    
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        
        //Slijedeći nam kod uzima vrijednosti koje je glavno sučelje poslalo i formulira tablicu ocjena
        if let newContext = context as? NSObject {
            let categories = ["totalRating", "conditionsRating", "windRating", "visibilityRating", "temperatureRating", "atmosphereRating", "uvRating"]
            
            self.Table.setNumberOfRows(7, withRowType: "ScoreRow")
            
            
            for i in 0...6 {
                let row = Table.rowController(at: i) as! TableRow
                
                if (categories[i] == "totalRating") {
                    row.CategoryLabel.setText("FlySafe:")
                    row.CategoryIcon.setHidden(true)
                }
                else {
                    row.CategoryLabel.setHidden(true)
                    row.CategoryIcon.setImageNamed(categories[i])
                }
                
                let score = newContext.value(forKey: categories[i])! as! Double
                row.ScoreLabel.setText(String(format: "%.1f", score))
                row.RowGroup.setBackgroundColor(UIColor.color(fromHexString: TableInterfaceController.GetColor(score: score)))
            }
        }
    }
    
    
    @IBOutlet var Table: WKInterfaceTable!
    
    //Pomoćna funkcija koja određuje boju reda tablice ovisno o ocjeni
    static func GetColor (score: Double) -> String {
        if(score < 2.0) {
            return "#F95F62"
        }
        else if (score < 4.0) {
            return "#FF9052"
        }
        return "#47e389"
    }
    
    //Funkcija koja se pokreće pri aktivaciji sučelja
    override func willActivate() {
        super.willActivate()
    }
    
    //Funckija koja se pokreće pri deaktivaciji sučelja
    override func didDeactivate() {
        super.didDeactivate()
    }
}
