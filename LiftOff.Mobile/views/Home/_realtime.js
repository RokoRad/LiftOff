import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';
import store from '../../store';
import { updateHome } from '../../actions';
import Toast from '../../functions/toast';
import language from '../../languages';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub');
      //units = 'metric';
      connection.logging = true;
      

proxy.on('broadcastWeather', (response) => {
  console.log('res', response)
  store.dispatch(updateHome(response));
  AsyncStorage.setItem('@realtime', JSON.stringify(response));
});

const _start = async (object, units) => {
  connection.start().done(() => {
    proxy.invoke('initiateConnection', object, units);
    console.log("start", object)
  }).fail(() => {
    Toast(`${language.serverError}`);
  });
}

const _stop = async () => {
  connection.stop();
}

export {
  _start,
  _stop
}