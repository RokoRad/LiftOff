import 'whatwg-fetch';
import headers from '../../functions/headers';
import language from '../../languages';
import store from '../../store';
import removeToken from '../../functions/removeToken';
import { updateLocation, setMarker } from '../../actions';

export default data => {
  const stored = store.getState().mapReducer.markerPosition;

  const location = {
    latitude: stored.lat,
    longitude: stored.lng
  }

  fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      location,
      time: new Date().toISOString()
    })
  }).then((response) => {
    if(response.status === 200) {
      response.json().then((value) => {
        console.log(value)
        // const parsed = JSON.parse(response._bodyInit).weatherData.timeLocation;
        // store.dispatch(
        //   updateLocation({
        //     ...parsed.location
        //   })
        // );
        // store.dispatch(
        //   setMarker({
        //     ...parsed.location
        //   })

        console.log(value)
      })
    } else if (response.status === 401){
      removeToken();
    } else {
      alert(language.serverError)
    }
  }).catch((error) => {
    alert(language.serverError)
  });
};
