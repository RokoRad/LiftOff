import store from '../../store';
import { updateDateTime } from '../../actions';

export default (value) => {
  store.dispatch(updateDateTime(store.getState().timeLocationReducer.timeLocation.dateTime.time = value));
}