import store from '../../store';
import { tooltipStatus } from '../../actions';

export default () => {
  console.log("opened picked")
  //store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = false)));
}