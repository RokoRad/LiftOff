import store from '../../store';
import { updateLocation } from '../../actions';
import key from '../../config/googleKey.js';

export default value => {
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
      // findNodeHandle(this.map).animateToCoordinate({
      //   latitude: 22,
      //   longitude: 22
      // }, 5000);
    }
  );
};
