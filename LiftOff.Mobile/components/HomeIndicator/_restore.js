import store from '../../store';
import { updateDateTime } from '../../actions';

export default () => {
  store.dispatch(
    updateDateTime(
      (store.getState().timeLocationReducer.timeLocation.time = new Date().toISOString())
    )
  );
};
