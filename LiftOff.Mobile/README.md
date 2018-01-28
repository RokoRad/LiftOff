# Uvod
U ovom fileu pronalaze se upute za instaliranje i pokretanje aplikacije. U slučaju greške, ispod se pronalaze upute za debuggiranje najčešćih, no u slučaju neke druge greške, možete me kontaktirati na [drazen@dump.hr](mailto:drazen@dump.hr "drazen@dump.hr") kako bi vas uputio u detaljnije riješavanje problema.

# Setupiranje
1. Instalirati najnoviju verziju Nodea i pacakge managera (Yarn/NPM).
2. Pokrenuti instalaciju sa `yarn` ili `npm install`.
3. Instalirati Expo aplikaciju na mobilnom uređaju.
4. Pokrenuti projekt sa `yarn start` ili `npm start`.
5. Skenirati QR kod iz konzole nakon pokretanja servera preko Expoa.

# Najčešće greške
### Setting a timer for a long period of time
Upozorenje (yellow box) vezano uz pokretanje realtime intervala na Android uređajima. Može se ukloniti ulaskom u `/node_modules/react-native/Libraries/Core/Timers/JSTimers.js` te promjenom `MAX_TIMER_DURATION_MS` sa defaultnih 60, na 300 sekundi.

### Top notch start
Greška koja se javlja ako se zaslon uređaja dira dok se aplikacija bundla ili učitava. Potrebno je samo refreshati aplikaciju.

### _language.ToRegsiter.default2
Greška koju aplikacija javlja kada uređaj ima problem sa povezivanjem sa lokalnom pohranom. Događa se samo u development modu i na prvom pokretanju. Potrebno je samo refreshati aplikaciju.

### Trying to add a root view with an explicit id already set.
Greška koju aplikacija javlja kada uređaj na prvom pokretanju. Najčešće se događa prilikom promjene UIa aplikacije te njenim nasilnim restartiranjme. Potrebno je sačekati par sekundi i tek onda refreshati aplikaciju kako bi se greška uklonila.