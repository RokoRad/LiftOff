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

    // dohvati token, slaji request
    clearInterval(this.stopwatch);
    store.dispatch(updateStopwatch({
      active: false,
      startTime: '',
      minutes: 0,
      seconds: 0
    }));
  } else {
    store.dispatch(updateStopwatch({
      startTime: new Date().toISOString(),
      active: true
    }));

    this.stopwatch = setInterval(() => {
      if(state.seconds === 59) {
        store.dispatch(updateStopwatch({
          minutes: state.minutes += 1,
          seconds: state.seconds = 0
        }));
      } else {
        store.dispatch(updateStopwatch({
          seconds: state.seconds += 1
        }));
      }

      console.log(store.getState())
    }, 1000);
  }
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
//     clearInterval(this.raise);
//     this.setState({
//       minutes: 0,
//       seconds: 0,
//       startTime: 0
//     })
//   } else {

//   }
//   this.setState({
//     active: !this.state.active
//   });
// }
