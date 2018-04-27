import store from '../../store';
import storage from '../storage';
import { updateHome } from '../../actions';
import { hubConnection } from 'signalr-no-jquery';
import language from '../../languages';

const connection = hubConnection('http://liftoffinfokup.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', response => {
  console.log("realtime", response)
  store.dispatch(updateHome(response));
  storage.set('@realtime', JSON.stringify(response));
});

const _start = async (object, units) => {
  connection
    .start()
    .done(() => {
      proxy.invoke('InitiateConnection', object, 'DJI Mavic Pro', units);
      console.log("rt invoked")
    })
    .fail(() => {
      alert(`${language.serverError}`);
    });
};

const _updateTimeLocation = async object => {
  console.log("rt update timeLoc")
  proxy.invoke('updateLocation', object);
};

const _changeUnits = async () => {
  proxy.invoke('changeUnits');
};

const _stop = async () => {
  connection.stop();
};

export { _start, _stop, _updateTimeLocation, _changeUnits };
