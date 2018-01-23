import store from '../../store';
import { updateLocation } from '../../actions';

export default (value) => {
  console.log("center", value)
  store.dispatch(updateLocation({
    longitude: value.longitude,
    latitude: value.latitude
  }));
}


// set locatino u redux