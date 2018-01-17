import signalr from 'react-native-signalr';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub'),
      units = 'metric'

connection.logging = false;

const initial = (object, units) => {
  proxy.invoke('initiateConnection', object, units);
};

const update = (location) => {
  proxy.invoke('updateLocation', location);
};

initial({
  location: {
    latitude: 43.508133,
    longitude: 16.440193
  },
  time: new Date().toISOString()
}, units);

export {
  connection,
  proxy,
  initial,
  update
}