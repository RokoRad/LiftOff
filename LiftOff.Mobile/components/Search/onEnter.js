import { MapView } from 'expo';
import key from '../../config/googleKey.js';

const onEnter = (value, ref) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then((response) => {
    const data = JSON.parse(response._bodyInit);
    const location = {
      latitude: data.results[0].geometry.location.lat,
      longitude: data.results[0].geometry.location.lng
    }
    ref.animateToCoordinate({
      ...location
    }, 500);
  })
}

export default onEnter;