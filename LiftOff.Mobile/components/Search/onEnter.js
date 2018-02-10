import store from '../../store';
import { updateLocation } from '../../actions';
import key from '../../config/googleKey.js';

export default value => {
  // fetchanje googleapi podataka o lokaciji te njihovo ažuriranje u storeu
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then(
    response => {
      const data = JSON.parse(response._bodyInit),
        parsed = data.results[0].geometry.location;
      store.dispatch(
        updateLocation({
          latitude: parsed.lat,
          longitude: parsed.lng
        })
      );
    }
  );
};
