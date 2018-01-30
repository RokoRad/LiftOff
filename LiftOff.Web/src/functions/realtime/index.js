import store from '../../store';
import storage from '../storage';
import { updateHome } from '../../actions';
import { hubConnection } from 'signalr-no-jquery';
import language from '../../languages';

const connection = hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
  proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', response => {
  console.log("BROADCASTED")
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
      alert(`${language.serverError}`);
    });
};

const _updateTimeLocation = async (object) => {
  console.log(object)
  console.log({
    location: {
      latitude: 22,
      longitude: 33
    },
    time: new Date().toISOString()
  })
  proxy.invoke('updateLocation', {
    location: {
      latitude: 22,
      longitude: 33
    },
    time: new Date().toISOString()
  }); 
}

const _changeUnits = async () => {
  proxy.invoke('changeUnits'); 
}

const _stop = async () => {
  connection.stop();
};

export { _start, _stop, _updateTimeLocation, _changeUnits };
