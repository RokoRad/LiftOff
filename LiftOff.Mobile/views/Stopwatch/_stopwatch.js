import { AsyncStorage } from 'react-native';
import {
  toggleStopwatch,
  setStarttime,
  updateSeconds,
  updateMinutes,
  updateStats,
  addLog
} from '../../actions';
import store from '../../store';
import removeToken from '../../functions/removeToken';
import _timeFlown from './_timeFlown.js';
import headers from '../../functions/headers';

export default history => {
  let state = store.getState().stopwatchReducer.stopwatch,
    home = store.getState().homeReducer.home,
    location = home.weatherData.TimeLocation.Location,
    flightSpot = home.weatherData.City,
    flySafeScore = home.TotalRating;

  if (state.active) {
    AsyncStorage.getItem('@token').then(token => {
      fetch('http://liftoffapi.azurewebsites.net/api/logging/logFlight', {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({
          timeFlown: _timeFlown(state.minutes, state.seconds),
          flySafeScore,
          drone: {
            name: 'DJI Spark'
          },
          flightLocation: {
            flightSpot,
            latitude: location.Latitude,
            longitude: location.Longitude
          },
          flightTime: {
            flightStartTime: state.startTime
          }
        })
      }).then(response => {
        store.dispatch(setStarttime(''));
        store.dispatch(updateSeconds((state.seconds = 0)));
        store.dispatch(updateMinutes((state.minutes = 0)));
        if (response.status === 200) {
          store.dispatch(updateStats(JSON.parse(response._bodyInit)));
          AsyncStorage.setItem('@stats', response._bodyInit);
        } else if (response.status === 401) {
          removeToken(history);
        }
      });
    });
    clearInterval(this.stopwatch);
    store.dispatch(
      addLog({
        location: flightSpot,
        rating: flySafeScore
      })
    );
  } else {
    store.dispatch(setStarttime((state.startTime = new Date().toISOString())));
    this.stopwatch = setInterval(() => {
      if (state.seconds === 59) {
        store.dispatch(updateSeconds((state.seconds = 0)));
        store.dispatch(updateMinutes((state.minutes += 1)));
      } else {
        store.dispatch(updateSeconds((state.seconds += 1)));
      }
    }, 1000);
  }
  store.dispatch(toggleStopwatch((state.active = !state.active)));
};
