import store from '../../store';
import storage from '../storage';
import { updateHome } from '../../actions';
import { hubConnection } from 'signalr-no-jquery';
import language from '../../languages';

const connection = hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', response => {
  console.log("b", response)
  store.dispatch(updateHome(response));
  storage.set('@realtime', JSON.stringify(response));
});

const _start = async (object, units) => {
  console.log("start", object)
  connection
    .start()
    .done(() => {
      proxy.invoke('initiateConnection', object, units);
    })
    .fail(() => {
      alert(`${language.serverError}`);
    });
};

const _updateTimeLocation = async (object) => {
  console.log("update", object)
  proxy.invoke('updateLocation', object); 
}

const _changeUnits = async () => {
  proxy.invoke('changeUnits'); 
}

const _stop = async () => {
  connection.stop();
};

export { _start, _stop, _updateTimeLocation, _changeUnits };
