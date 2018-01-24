import store from '../../store';
import { updateLocation } from '../../actions';

export default (value) => {
  store.dispatch(updateLocation(value));
  console.log("map", value)
}