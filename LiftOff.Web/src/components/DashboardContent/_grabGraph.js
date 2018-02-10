import 'whatwg-fetch';
import headers from '../../functions/headers';
import language from '../../languages';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { updateGraph } from '../../actions';
import storage from '../../functions/storage';

export default data => {
  const stored = store.getState().mapReducer.markerPosition;

  const location = {
    latitude: stored.lat,
    longitude: stored.lng
  };

  fetch('http://liftoffinfokup.azurewebsites.net/api/weather/get-prognosis-for-location', {
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
          let scores = [];
          value.map(score => {
            scores.push(score.totalRating);
          });
          store.dispatch(
            updateGraph(scores)
          );
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
