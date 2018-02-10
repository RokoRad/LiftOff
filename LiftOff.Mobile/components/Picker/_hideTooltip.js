import store from '../../store';
import { tooltipStatus } from '../../actions';

export default () => {
  // uklananje tooltipa poviše daepickera
  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = false)));
};
