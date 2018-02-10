/// dohvaćanje storea i akcije
import store from '../../store';
import { updateLocation } from '../../actions';

// nakon promjene pozicije mape, pozivamo akcijuna store koji ga ažurira sa novom
export default value => {
  store.dispatch(updateLocation(value));
};
