import signalr from 'react-native-signalr';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub'),
      units = 'metric'

connection.logging = false;

function broadcast() {
  proxy.on('broadcastWeather', (response) => {
  console.log("bbb")
  AsyncStorage.setItem('@realtime', JSON.stringify(response)).then();
  console.log(response)
  // this.setState({
  //   list: response
  // })
}); 
}
// const initial = (object, units) => {
//   proxy.invoke('initiateConnection', object, units);
// };

// const update = (location) => {
//   proxy.invoke('updateLocation', location);
// };

// const setup = () => {
//   //setInterval(function(){ console.log("kurac") }, 500);
//   connection.start().done(() => {
//     console.log("usa")
//     proxy.invoke('initiateConnection', {
//       location: {
//         latitude: 43.508133,
//         longitude: 16.440193
//       },
//       time: new Date().toISOString()
//     }, units);
//     console.log("prosa")
//   }).fail(() => {
//     console.log("server error")
//     // server error
//   });
// };

export {
  connection,
  proxy,
  broadcast
}