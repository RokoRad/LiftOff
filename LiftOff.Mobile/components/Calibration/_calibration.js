import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { updateLocation, setMarker } from '../../actions';

export default history => {
  const stored = store.getState().mapReducer.markerPosition;

  // dohvaćanje trenutne lokacije
  const location = {
    latitude: stored.latitude,
    longitude: stored.longitude
  };

  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffinfokup.azurewebsites.net/Api/weather/getBestRatingNearMe', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        location,
        time: new Date().toISOString()
      })
    }).then(response => {
      if (response.status === 200) {
        // podatke o kalibraciji sprema u redux store
        const parsed = JSON.parse(response._bodyInit).weatherData.timeLocation;
        store.dispatch(
          updateLocation({
            ...parsed.location
          })
        );
        // mijenja pozociji markera
        store.dispatch(
          setMarker({
            ...parsed.location
          })
        );
      } else if (response.status === 401) {
        removeToken(history);
      }
    });
  });
};
