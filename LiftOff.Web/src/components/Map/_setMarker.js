import store from '../../store';
import { setMarker } from '../../actions';

export default event => {
  store.dispatch(
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  );
};
