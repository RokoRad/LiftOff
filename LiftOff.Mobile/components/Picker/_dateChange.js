import store from '../../store';
import { updateDateTime } from '../../actions';

export default (value, history) => {
  store.dispatch(updateDateTime((store.getState().timeLocationReducer.timeLocation.time = value)));
  history.push('/home');
};
