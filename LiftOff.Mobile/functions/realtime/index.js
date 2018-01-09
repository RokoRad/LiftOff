import signalr from 'react-native-signalr';
import Toast from 'react-native-simple-toast';
import language from '../../config/settings.js';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/'),
      proxy = connection.createHubProxy('weatherHub');
connection.logging = true;

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  Toast.show(language.serverError);
});

const timeLocation = {
  Location: {
    Latitude: 43.508133,
    Longitutde: 16.440193
  },
  Time: new Date()
}
let units = 'metric';

window.onLoad = function() {
  setup();
}
// setupiranje variabli za promjenu podataka
let dateTime, // normalni date, nije ISO
    location; // objekt sa latitude i longitude

// setupiranje poziva serveru
const changeDateTime = (value) => (dateTime = value),
      changeLocation = (value) => (location = value),
      changeMetrics = () => (proxy.invoke('changeUnits')),
      updateServer = (dateTime, location) => {
        timeLocation = {
          Location: {
            Latitude: location.latitude,
            Longitutde: location.longitude
          },
          Time: dateTime
        }
        proxy.invoke('updateLocation', timeLocation);
};

// export default {
//   proxy,
//   timeLocation,
//   units,
//   changeDateTime,
//   changeLocation,
//   changeMetrics,
//   updateServer
// };