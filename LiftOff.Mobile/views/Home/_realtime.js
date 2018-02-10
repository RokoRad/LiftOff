import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';
import store from '../../store';
import { updateHome } from '../../actions';
import Toast from '../../functions/toast';
import language from '../../languages';

const connection = signalr.hubConnection('http://liftoffinfokup.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', response => {
  store.dispatch(updateHome(response));
  AsyncStorage.setItem('@realtime', JSON.stringify(response));
  console.log(response)
});

const _start = async (object, drone, units) => {
  connection
    .start()
    .done(() => {
      proxy.invoke('initiateConnection', object, drone, units);
    })
    .fail(() => {
      Toast(`${language.serverError}`);
    });
};

const _stop = async () => {
  connection.stop();
};

export { _start, _stop };
