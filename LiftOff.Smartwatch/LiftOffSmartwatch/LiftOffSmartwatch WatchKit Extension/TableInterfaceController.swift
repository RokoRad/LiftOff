import WatchKit
import Foundation
import UIKit

//Klasa zadužena za sučelje tablice ocjena
class TableInterfaceController: WKInterfaceController {
    
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        
        //Slijedeći nam kod uzima vrijednosti koje je glavno sučelje poslalo i formulira tablicu ocjena
        if let newContext = context as? [NSObject] {
            if (newContext.count != 0) {
                self.Table.setNumberOfRows(newContext.count, withRowType: "ScoreRow")
                for i in 0...newContext.count - 1 {
                    let row = Table.rowController(at: i) as! TableRow
                    row.CategoryLabel.setText(newContext[i].value(forKey: "category") as? String ?? "no category")
                    row.ScoreLabel.setText(newContext[i].value(forKey: "score") as? String ?? "/")
                    row.RowGroup.setBackgroundColor(UIColor.color(fromHexString: GetColor(score: newContext[i].value(forKey: "score") as? Double ?? 5.0)))
                }
            }
        }
    }
    
    @IBOutlet var Table: WKInterfaceTable!
    
    //Pomoćna funkcija koja određuje boju reda tablice ovisno o ocjeni
    func GetColor (score: Double) -> String {
        if(score < 2.0) {
            return "0xF95F62"
        }
        else if (score < 4.0) {
            return "0xFF9052"
        }
        return "0x47e389"
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
