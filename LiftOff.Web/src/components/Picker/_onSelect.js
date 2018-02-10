import store from '../../store';
import { updateDateTime } from '../../actions';

export default e => {
  store.dispatch(
    updateDateTime(
      (store.getState().timeLocationReducer.timeLocation.time = new Date(e).toISOString())
    )
  );
};
