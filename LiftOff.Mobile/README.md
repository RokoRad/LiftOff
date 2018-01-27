# Setupiranje
1. Instalirati najnoviju verziju Nodea i pacakge managera (Yarn/NPM).
2. Pokrenuti instalaciju sa `yarn` ili `npm install`.
3. Instalirati Expo aplikaciju na mobilnom uređaju.
4. Pokrenuti projekt sa `yarn start` ili `npm start`.
5. Skenirati QR kod iz konzole nakon pokretanja servera preko Expoa.

# Debug
Error (yellow box) koji se može prikazati prilikom pokretanja instalacije je vezan uz timer. Njega se može ukloniti ulaskom u `/node_modules/react-native/Libraries/Core/Timers/JSTimers.js` te promjenom `MAX_TIMER_DURATION_MS` sa defaultnih 60, na 300 sekundi.