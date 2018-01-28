import { changeUnits } from '../../actions';
import store from '../../store';

export default (bool) => {
  if(bool) {
    store.dispatch(changeUnits('imperial'));
  } else {
    store.dispatch(changeUnits('metric'))
  }
}