import { AsyncStorage } from 'react-native';
import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes } from '../../actions';
import store from '../../store';
import removeToken from '../../functions/removeToken';

const _stopwatch = () => {
  let state = store.getState();
      state = state.stopwatchReducer.stopwatch;
      
  if(state.active) {
    AsyncStorage.getItem('@token').then((token) => {
      fetch('', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + value,
          'Content-type': 'application/json'
        },
        body: state
      }).then((response) => {
        if(response.status === 200) {
          console.log("usa" + response)
        } else if (response.status === 401) {
          this.props.history.push('/');
          removeToken();
        }
      })
    });

    clearInterval(this.stopwatch);
    store.dispatch(toggleStopwatch(false));
    store.dispatch(setStarttime(''));
    store.dispatch(updateSeconds(0));
    store.dispatch(updateMinutes(0));
  } else {
    store.dispatch(toggleStopwatch(true));
    store.dispatch(setStarttime(new Date().toISOString()));

    this.stopwatch = setInterval(() => {
      if(state.seconds === 59) {
        store.dispatch(updateSeconds(0));
        store.dispatch(updateMinutes(state.minutes += 1));
      } else {
        store.dispatch(updateSeconds(state.seconds += 1));
      }
    }, 1000);
  }
}

export default _stopwatch;