import signalr from 'react-native-signalr';
const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/');
connection.logging = true;

const proxy = connection.createHubProxy('weatherHub');
let response;

proxy.on('broadcastWeather', (weatherRating) => {
  response = weatherRating;
  console.log(weatherRating)
});

let timeLocation = {
  Location: {
    Latitude: 23,
    Longitude: 33
  },
  Time: '2018-01-09T12:53:51+00:00'
};

let units = 'metric'

connection.start().done(() => {
        proxy.invoke('initiateConnection', timeLocation, units);
    }).fail(() => {
        console.log('Failed');
}   );

export default response;