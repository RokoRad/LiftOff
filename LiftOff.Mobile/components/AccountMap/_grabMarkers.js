import { AsyncStorage } from 'react-native';
import removeToken from '../../functions/removeToken';
import store from '../../store';

export default (location, history) => {
  AsyncStorage.getItem('@token').then((token) => {
    console.log(location)
    fetch('http://liftoffapi.azurewebsites.net/api/flights/getFlightsNearMe', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        location: {
          latitude: location.latitude,
          longitude: location.longitude
        },
        time: new Date()
      })
    }).then((response) => {
      if(response.status === 200) {
        if(JSON.parse(response._bodyInit) === 'no flights') {
          console.log("NOOO")
        } else {
          console.log(JSON.parse(response))
          // set state
        }
      } else if (response.status === 401) {
        history.push('/');
        removeToken();
      }
    });
  });
};