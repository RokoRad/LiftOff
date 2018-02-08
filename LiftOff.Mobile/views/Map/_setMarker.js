import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { setMarker, updateLocation, tooltipStatus, updateTooltip } from '../../actions';

export default (value, history) => {
  value.persist();
  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffinfokup.azurewebsites.net/api/weather/getScore', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        location: {
          latitude: value.nativeEvent.coordinate.latitude,
          longitude: value.nativeEvent.coordinate.longitude
        },
        time: new Date().toISOString()
      })
    }).then(response => {
      if (response.status === 200) {
        const parsed = JSON.parse(response._bodyInit);
        store.dispatch(
          updateTooltip({
            city: parsed.weatherData.city,
            rating: parsed.totalRating
          })
        );
      } else if (response.status === 401) {
        removeToken(history);
      }
    });
  });

  store.dispatch(setMarker(value.nativeEvent.coordinate));
  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = true)));
};
