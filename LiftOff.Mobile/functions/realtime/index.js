import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub');
connection.logging = false;

const timeLocation = {
  Location: {
    Latitude: 43.508133,
    Longitutde: 16.440193
  },
  Time: new Date()
}
const units = 'metric';

// setupiranje variabli za promjenu podataka
let dateTime, // normalni date, nije ISO
    location; // objekt sa latitude i longitude

// setupiranje poziva serveru
const changeDateTime = (value) => (dateTime = value),
      changeLocation = (value) => (location = value),
      changeMetrics = () => (proxy.invoke('changeUnits')),
      updateServer = (timeLocation) => {
        // timeLocation = {
        //   Location: {
        //     Latitude: location.latitude,
        //     Longitutde: location.longitude
        //   },
        //   Time: dateTime
        // }
        proxy.invoke('updateLocation', timeLocation);
};

AsyncStorage.getItem('@location').then((value) => {
  console.log(value)
})

export {
  connection,
  proxy,
  timeLocation,
  units,
  dateTime,
  location,
  changeDateTime,
  changeLocation,
  changeMetrics,
  updateServer
}