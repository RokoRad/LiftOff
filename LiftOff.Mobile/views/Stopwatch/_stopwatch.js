import { AsyncStorage } from 'react-native';
import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes } from '../../actions';
import store from '../../store';

const _stopwatch = () => {
  let state = store.getState();
      state = state.stopwatchReducer.stopwatch;
      
  if(state.active) {
    // AsyncStorage.getItem('@token').then((token) => {
    //   // fetch sa tokenom
    // });
    clearInterval(this.stopwatch);
    store.dispatch(setStarttime(''));
    store.dispatch(updateSeconds(0));
    store.dispatch(updateMinutes(0));
  } else {
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
  store.dispatch(toggleStopwatch());
}

export default _stopwatch;

// bind = () => {
//   if(this.state.active) {
//     AsyncStorage.getItem('@token').then((value) => {
//       fetch('http://liftoffapi.azurewebsites.net/api/logging/logFlight', {
//         method: 'POST',
//         headers: {
//           'Authorization': 'Bearer ' + value,
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(holder)
//       }).then((response) => {
//         if(response.status === 200) {
//           AsyncStorage.removeItem('@stats');
//           AsyncStorage.setItem('@stats', JSON.stringify(response));
//         } else if (response.status === 401) {

//         } else {

//         }});
//     });
// }
