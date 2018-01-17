import signalr from 'react-native-signalr';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub');

connection.logging = false;

const inital = (object, units) => {
  proxy.invoke('initiateConnection', object, units);
}

export {
  connection,
  proxy,
  inital
}