import { _changeUnits } from '../../functions/realtime';
import { changeUnits } from '../../actions';
import store from '../../store';

const unit = store.getState().homeReducer.units;

export default () => {
  // if (unit === 'metric') {
  //   changeUnits('imperial')
  // } else {
  //   changeUnits('metric')
  // }
  _changeUnits();
};
