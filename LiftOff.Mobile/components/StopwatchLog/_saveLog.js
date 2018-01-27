import store from '../../store';
import { saveLog } from '../../actions';

export default (id) => {
  store.dispatch(saveLog(id));
}