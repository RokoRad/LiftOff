import { AsyncStorage } from 'react-native';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import headers from '../../functions/headers';
import { updateMarkers } from '../../actions';

export default (location, history) => {
  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffinfokup.azurewebsites.net/api/flight-hotspots/get-flights-near-me', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        location: {
          latitude: location.latitude,
          longitude: location.longitude
        },
        time: new Date()
      })
    }).then(response => {
      if (response.status === 200) {
        if (JSON.parse(response._bodyInit) === 'no flights') {
          // no flights
        } else {
          // set state
        }
      } else if (response.status === 401) {
        removeToken(history);
      }
    });
  });
};
