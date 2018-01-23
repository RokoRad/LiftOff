import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';
import store from '../../store';
import { updateHome } from '../../actions';
import Toast from 'react-native-simple-toast';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub');
      //units = 'metric';

proxy.on('broadcastWeather', (response) => {
  console.log(response);
  store.dispatch(updateHome(response));
  AsyncStorage.setItem('@realime', JSON.stringify(response));
  // this.setState({
  //   list: response
  // });
  //AsyncStorage.setItem('@realtime', JSON.stringify(response));
  //console.log(response)
});

const _start = async (object, units) => {
  connection.start().done(() => {
    proxy.invoke('initiateConnection', object, units);
  }).fail(() => {
    // puka server / toast
  });
}

const _stop = async () => {
  connection.stop();
}

export {
  _start,
  _stop
}