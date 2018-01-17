import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';

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

const setup = () => {
  connection.start().done(() => {
    initial({
      location: {
        latitude: 43.508133,
        longitude: 16.440193
      },
      time: new Date().toISOString()
    }, units);
    console.log("aaa")
  }).fail(() => {
    console.log("server error")
    // server error
  });
};

// AsyncStorage.getItem('@timeLocation').then((value) => {
//   connection.start().done(() => {
//     if(value !== null) {
//       let parsed = JSON.parse(value);
//         initial({
//           location: {
//             latitude: 43.508133,
//             longitude: 16.440193
//           },
//           time: new Date().toISOString()
//         }, units);        
//       })
//     }
//   }).fail(() => {
//     AsyncStorage.getItem('@realtime').then((cache) => {
//       this.setState({
//         list: JSON.parse(cache)
//       });
//       console.log(cache)
//     });
//     Toast.show("Server error");
//   });
// });

export {
  connection,
  proxy,
  initial,
  update,
  setup
}