import { changeUnits } from '../../actions';
import store from '../../store';

export default bool => {
  if (bool) {
    store.dispatch(changeUnits((store.getState().settingsReducer.units = 'imperial')));
  } else {
    store.dispatch(changeUnits((store.getState().settingsReducer.units = 'metric')));
  }
};
