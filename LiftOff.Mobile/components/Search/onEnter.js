import { MapView } from 'expo';
import store from '../../store';
import { updateLocation } from '../../actions';
import key from '../../config/googleKey.js';

export default (value) => {
  console.log(value)
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then((response) => {
    const data = JSON.parse(response._bodyInit).data.results[0].geometry.location;
    store.dispatch(updateLocation({
      latitude: data.lat,
      longitude: data.lng
    }));
    // ref.animateToCoordinate({
    //   ...location
    // }, 500);
  })
}