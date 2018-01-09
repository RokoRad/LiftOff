import signalr from 'react-native-signalr';
import Toast from 'react-native-simple-toast';
import language from '../../config/settings.js';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/');
  connection.logging = true;
const proxy = connection.createHubProxy('weatherHub');

const timeLocation = {
  Location: {
    Latitude: 43.508133,
    Longitude: 16.440193
  },
  Time: new Date()
}

let units = 'metric'

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  // error pri spajanju
});


connection.start().done(() => {
  proxy.invoke('')
}),fail(() => {
  Toast.show(language.serverError);
});


let dateTime, // normalni date, nije ISO
    location; // objekt sa latitude i longitude

const changeDateTime = (value) => (dateTime = value),
      changeLocation = (value) => (location = value),
      changeMetrics = () => (proxy.invoke('changeUnits')),
      updateServer = (dateTime, location) => {
        const timeLocation = {
          Location: {
            Latitude: location.latitude,
            Longitutde: location.longitude
          },
          Time: dateTime
        }
        proxy.invoke('updateLocation', timeLocation);
};

export default proxy;