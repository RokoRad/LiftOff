import signalr from 'react-native-signalr';
import { AsyncStorage } from 'react-native';
import store from '../../store';
import { updateHome } from '../../actions';
import Toast from '../../functions/toast';
import language from '../../languages';

// definiranje huba na koji će se naša realtime komunikacija ostvariti
const connection = signalr.hubConnection('http://liftoffinfokup.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

// funkcija koja se izvrši nakon što server dostavi nove podatke
proxy.on('broadcastWeather', response => {
  store.dispatch(updateHome(response));
  AsyncStorage.setItem('@realtime', JSON.stringify(response));
});

// funkcija start koja pokreće našu konekciju
const _start = async (object, units) => {
  connection
    .start()
    .done(() => {
      proxy.invoke('initiateConnection', object, units);
    })
    .fail(() => {
      Toast(`${language.serverError}`);
    });
};

// funkcija za zaustavljanje konekcije
const _stop = async () => {
  connection.stop();
};

export { _start, _stop };
