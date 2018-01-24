import store from '../../store';
import { setRef } from '../../actions';

export default (value) => {
  store.dispatch(setRef(value));
}