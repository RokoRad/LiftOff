import store from '../../store';
import { updateDateTime } from '../../actions';

export default (value, history) => {
  store.dispatch(updateDateTime(store.getState().timeLocationReducer.timeLocation.dateTime.time = value));
  console.log(store.getState().timeLocationReducer.timeLocation.dateTime.time)
  history.push('/home');
}