import store from '../../store';
import { updateDateTime } from '../../actions';

export default (e) => {
  console.log(new Date(e).toISOString())
  //store.dispatch(updateDateTime((store.getState().timeLocationReducer.timeLocation.time = value)));
  
}