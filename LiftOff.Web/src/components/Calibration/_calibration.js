import 'whatwg-fetch';
import headers from '../../functions/headers';
import language from '../../languages';
import store from '../../store';
import removeToken from '../../functions/removeToken';
import storage from '../../functions/storage';
import { updateLocation, setMarker, updateHome } from '../../actions';

export default data => {
  const stored = store.getState().mapReducer.markerPosition;

  const location = {
    latitude: stored.lat,
    longitude: stored.lng
  };

  fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      location,
      time: new Date().toISOString()
    })
  })
    .then(response => {
      if (response.status === 200) {
        response.json().then(value => {
          const location = value.weatherData.timeLocation.location;

          store.dispatch(
            updateLocation({
              lat: location.latitude,
              lng: location.longitude
            })
          );

          store.dispatch(
            setMarker({
              lat: location.latitude,
              lng: location.longitude
            })
          );

          console.log("old", value)
          console.log("new", _recall(value))
        });
      } else if (response.status === 401) {
        removeToken();
      } else {
        alert(language.serverError);
      }
    })
    .catch(error => {
      alert(language.serverError);
    });
};
