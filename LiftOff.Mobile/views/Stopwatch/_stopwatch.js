import { AsyncStorage } from 'react-native';
import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes } from '../../actions';
import store from '../../store';
import removeToken from '../../functions/removeToken';
import _timeFlown from './_timeFlown.js';

const _stopwatch = () => {
  let state = store.getState();
      state = state.stopwatchReducer.stopwatch;
      
  if(state.active) {
    AsyncStorage.getItem('@token').then((token) => {
      fetch('http://liftoffapi.azurewebsites.net/api/logging/logFlight', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          timeFlown: _timeFlown(state.minutes, state.seconds),
          flySafeScore: 2.2,
          drone: {
            name: 'Dron 1'
          },
          flightLocation: {
            flightSpot: 'Split',
            latitude: 22,
            longitude: 22
          },
          flightTime: {
            flightStartTime: state.startTime
          }
        })
      }).then((response) => {
        if(response.status === 200) {
          console.log(JSON.parse(response._bodyInit))
        } else if (response.status === 401) {
          this.props.history.push('/');
          removeToken();
        }
      })
    });

    clearInterval(this.stopwatch);
    store.dispatch(toggleStopwatch(!state.active));
    store.dispatch(setStarttime(''));
    store.dispatch(updateSeconds(0));
    store.dispatch(updateMinutes(0));
  } else {
    store.dispatch(toggleStopwatch(true));
    store.dispatch(setStarttime(new Date().toISOString()));

    this.stopwatch = setInterval(() => {
      console.log(state)
      if(state.seconds === 59) {
        store.dispatch(updateSeconds(state.seconds = 0));
        store.dispatch(updateMinutes(state.minutes += 1));
      } else {
        store.dispatch(updateSeconds(state.seconds += 1));
      }
    }, 1000);
  }
}

export default _stopwatch;