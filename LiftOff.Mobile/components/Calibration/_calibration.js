import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { updateLocation } from '../../actions';

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
        const parsed = JSON.parse(response._bodyInit).weatherData.timeLocation;
        console.log(parsed.location);
        store.dispatch(updateLocation({
          ...parsed.location,
        }));
        store.dispatch(setMarker({
          ...parsed.location,
        }));
      } else if (response.status === 401) {
        removeToken();
        history.push('/');
      }
    })
  });
}