import store from '../../store';
import { updateDateTime } from '../../actions';

export default (value, history) => {
  // ažuriranje timeLocation objekta u storeu i redirect na home
  store.dispatch(updateDateTime((store.getState().timeLocationReducer.timeLocation.time = value)));
  history.push('/home');
};
