import 'whatwg-fetch';
import headers from '../../functions/headers';
import language from '../../languages';
import store from '../../store';
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
    body: {
      location,
      time: new Date().toISOString()
    }
  }).then((response) => {
    if(response.status === 200) {
      response.json().then((value) => {
        console.log(value)
      })
    } else if (response.status === 401){
      alert(language.Token)
    } else {
      alert(language.serverError)
    }
    console.log(response)
    console.log(headers())
    console.log({
      location,
      time: new Date().toISOString()
    })
  }).catch((error) => {
    alert(language.serverError)
  });
};
