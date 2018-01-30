import signalr from 'react-native-signalr';
import store from '../../store';
import storage from '../__/functions/storage';
import { updateHome } from '../../actions';
import language from '../../languages';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', response => {
  store.dispatch(updateHome(response));
  storage.set('@realtime', JSON.stringify(response));
});

const _start = async (object, units) => {
  connection
    .start()
    .done(() => {
      proxy.invoke('initiateConnection', object, units);
    })
    .fail(() => {
      alert(`˘${language.serverError}`);
    });
};

const _stop = async () => {
  connection.stop();
};

export { _start, _stop };
