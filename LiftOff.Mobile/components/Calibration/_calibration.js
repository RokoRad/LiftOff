import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { MapView } from 'expo';

export default (history) => {
  const stored = store.getState().mapReducer.markerPosition;

  const location = {
    latitude: stored.latitude,
    longitude: stored.longitude
  }

  AsyncStorage.getItem('@token').then((token) => {
    fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        location,
        time: new Date().toISOString()
      })
    }).then((response) => {
      if(response.status === 200) {
        console.log(JSON.parse(response._bodyInit));
        animateToCoordinate({
          ...parsed.weatherData.timeLocation.location
        }, 500);
        // data u redux
      } else if (response.status === 401) {
        removeToken();
        history.push('/');
      }
    })
  });
}