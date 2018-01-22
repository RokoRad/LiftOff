import { AsyncStorage } from 'react-native';
import { updateStopwatch } from '../../actions';
import store from '../../store';

const _stopwatch = (state) => {
  if(state.active) {
    console.log(store.getState())
    // AsyncStorage.getItem('@token').then((token) => {
    //   // fetch sa tokenom
    // });

    // dohvati token, slaji request
    // zaustavi interval
    // reset values u storeu
    clearInterval(this.stopwatch);
    store.dispatch(updateStopwatch({
      active: false,
      startTime: 0,
      minutes: 0,
      seconds: 0
    }));
  } else {
    this.stopwatch = setInterval(() => {
      console.log(store.getState())
      // if(state.seconds === 61) {
      //   // dispatch minutu ++, sekunde na 0
      // } else {
      //   // dispatch sekund za jednu
      // }
    }, 1000);
    // startTime, zapocmi interval
    // active => false
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
//     this.setState({
//       startTime: new Date().toISOString()
//     });
//     this.raise = setInterval(() => {
//       if(this.state.seconds === 61) {
//         this.setState({
//           minutes: this.state.minutes+=1,
//           seconds: 0
//         });
//       } else {
//         this.setState({
//           seconds: this.state.seconds+=1
//         });
//       }
//     }, 1000);
//   }
//   this.setState({
//     active: !this.state.active
//   });
// }
