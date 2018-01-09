import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';


const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/');
connection.logging = true;
const proxy = connection.createHubProxy('weatherHub');

const response = proxy.on('broadcastWeather', (value) => {
  AsyncStorage.setItem('@realtime', value);
});

let timeLocation = {
  Location: {
    Latitude: 23,
    Longitude: 33
  },
  Time: '2018-01-09T12:53:51+01:00'
};

let units = 'metric'

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  // error pri spajanju
});
