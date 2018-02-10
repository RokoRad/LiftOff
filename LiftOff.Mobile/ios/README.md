# Uvod
U ovom fileu pronalaze se upute za instaliranje i pokretanje nativne iOS komponente za Apple watch uređaje. U slučaju greške možete me kontaktirati na [toma@dump.hr](mailto:toma@dump.hr "toma@dump.hr") kako bi vas uputio u detaljnije riješavanje problema.

# Setupiranje
## Potrebni alati
1. Xcode verzija 9.2
2. iPhone iOS verzije 11 uparen sa Apple Watchom watchOS verzije 4.2 ili iPhone i Watch simulatori prikladnih operacijskih sustava
3. Pokrenut Expo server (ako Vam treba pomoć oko ovog postupka, pročitajte README.md u LiftOff.Mobile folderu)


## Pokretanje
1. Otvorite liftoff.xcodeworkspace u Xcodeu.
2. Otvorite EXShell.plist file koji ćete pronaći u liftoff/Supporting folderu.
3. U njemu, morate promijeniti "manifestURL" i "developmentURL" na onaj koji vam je prikazan u expo konzoli
   (primjer takvog URL-a bi bio exp://192.168.0.111:19000). - Ovo je potrebno da aplikacija zna gdje će mu biti serviran
   React Native kod.
4. Izabrati uređaje na koje želite pokrenuti aplikaciju, bilo to iPhone koji je priključen na računalo ili simulatori koji
   su ugrađeni u Xcode.
5. (Ako ste pokrenuli na fizičkim uređajima) Potrebno je dati odogovarajuće dozvole za pokretanje aplikacija s računala.
   Pri prvom pokretanju iPhone i Apple Watch aplikacije će Vam operacijski sustav reći kako to možete odobriti.