import store from '../../store';
import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import { updateStats } from '../../actions';

export default (id, history) => {
  let state = store.getState().logsReducer.logs,
    home = store.getState().homeReducer.home,
    location = home.weatherData.TimeLocation.Location,
    flightSpot = home.weatherData.City,
    flySafeScore = home.TotalRating,
    drone = store.getState().settingsReducer.drone;

  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffapi.azurewebsites.net/api/logging/logFlight', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        timeFlown: state[id].timeFlown,
        flySafeScore,
        drone: {
          name: drone
        },
        flightLocation: {
          flightSpot,
          latitude: location.Latitude,
          longitude: location.Longitude
        },
        flightTime: {
          flightStartTime: state[id].time
        }
      })
    }).then((response) => {
      if(response.status === 200) {
        store.dispatch(updateStats(JSON.parse(response._bodyInit)));
        AsyncStorage.setItem('@stats', response._bodyInit);
        store.dispatch(saveLog(id));
      } else if (response.status === 401) {
        removeToken(history);
      }
    })
  });
};
