import signalr from 'react-native-signalr';

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

export default proxy;