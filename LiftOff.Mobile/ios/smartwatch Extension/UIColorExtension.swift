import Foundation
import UIKit

//Ekstenzija UIColor klase u kojoj je implementirana funkcionalnost promjene heksadecimalne vrijednosti u UIColor objekt
public extension UIColor {
    public static func color(fromHexString: String, alpha:CGFloat? = 1.0) -> UIColor {
        //Promjeni heksadecimalni zapis u cijelobrojni
        let hexint = Int(colorInteger(fromHexString: fromHexString))
        let red = CGFloat((hexint & 0xff0000) >> 16) / 255.0
        let green = CGFloat((hexint & 0xff00) >> 8) / 255.0
        let blue = CGFloat((hexint & 0xff) >> 0) / 255.0
        let alpha = alpha!
        
        //Stvori novi UIColor objekt
        let color = UIColor(red: red, green: green, blue: blue, alpha: alpha)
        return color
    }
    
    //Funckija koja vraća cijelobrojni zapis iz heksadecimalnog
    private static func colorInteger(fromHexString: String) -> UInt32 {
        var hexInt: UInt32 = 0
        let scanner: Scanner = Scanner(string: fromHexString)
        scanner.charactersToBeSkipped = CharacterSet(charactersIn: "#")
        scanner.scanHexInt32(&hexInt)
        return hexInt
    }
    
    var redValue: CGFloat{
        return cgColor.components! [0]
    }
    
    var greenValue: CGFloat{
        return cgColor.components! [1]
    }
    
    var blueValue: CGFloat{
        return cgColor.components! [2]
    }
    
    var alphaValue: CGFloat{
        return cgColor.components! [3]
    }
}
