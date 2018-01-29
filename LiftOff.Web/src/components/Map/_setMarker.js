import store from '../../store';
import { setMarker } from '../../actions';

export default (event) => {
  console.log(event.latLng.lat())
  console.log(event.latLng.lng())
  store.dispatch(setMarker({
    lat: event.latLng.lat(),
    lng: event.latLng.lng()
  }));
}
