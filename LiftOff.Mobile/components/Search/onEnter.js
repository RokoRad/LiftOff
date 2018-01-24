import { MapView } from 'expo';
import { findNodeHandle } from 'react-native';
import store from '../../store';
import { updateLocation } from '../../actions';
import key from '../../config/googleKey.js';

export default (value) => {
  console.log(value)
  console.log(findNodeHandle(this.refs['this.map']));
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then((response) => {
    const data = JSON.parse(response._bodyInit),
          parsed = data.results[0].geometry.location;
    store.dispatch(updateLocation({
      latitude: parsed.lat,
      longitude: parsed.lng
    }));
    // pointer.animateToCoordinate({
    //   latitude: 22,
    //   longitude: 22
    // }, 500);
  })
}