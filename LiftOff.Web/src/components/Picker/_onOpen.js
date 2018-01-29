import store from '../../store';
import { tooltipStatus } from '../../actions';

export default () => {
  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = false)));
}