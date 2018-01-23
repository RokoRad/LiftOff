import { AsyncStorage } from 'react-native';
import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes } from '../../actions';
import store from '../../store';
import removeToken from '../../functions/removeToken';

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

      //   body: JSON.stringify({
      //     location: {
      //       latitude: this.state.center.latitude,
      //       longitude: this.state.center.longitude
      //     },
      //     time: new Date().toISOString()
      //   })

      //   "TimeLocation": {
      //     "Location": {
      //         "Latitude": double,
      //         "Longitude": double
      //     },
      //     "Time": datetime
      // }

        // "Flight": {
        //   "TimeFlown": int (broj sekundi koji si letia),
        //   "FlySafeScore": double,
        //   "Drone": {
        //       "Name": string
        //   },
        //   "FlightLocation": {
        //       "FlightSpot": string (misto),
        //       "Latitude": double,
        //       "Longitude": double
        //   },
        //   "FlightTime": {
        //       "FlightStartTime": datetime
        //   }

        body: JSON.stringify({
          timeFlown: 1,
          flySafeScore: 2.2,
          drone: {
            name: 'Drone 1'
          },
          flightLocation: {
            latitude: 22,
            longitude: 222
          },
          flightTime: {
            flightStartTime: new Date().toISOString()
          }
        })
      }).then((response) => {
        if(response.status === 200) {
          console.log("usa" + response)
        } else if (response.status === 401) {
          this.props.history.push('/');
          removeToken();
        }
        console.log(response)
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