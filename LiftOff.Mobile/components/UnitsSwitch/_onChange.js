import { changeUnits } from '../../actions';
import store from '../../store';

// ovisno o switchu  vrši se promjena jedinica
export default bool => {
  if (bool) {
    store.dispatch(changeUnits((store.getState().settingsReducer.units = 'imperial')));
  } else {
    store.dispatch(changeUnits((store.getState().settingsReducer.units = 'metric')));
  }
};
