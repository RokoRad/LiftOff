import store from '../../store';
import { updateDateTime } from '../../actions';

// funckija za resotranje vremena sa prošlosti na trenutno
export default () => {
  store.dispatch(
    updateDateTime(
      (store.getState().timeLocationReducer.timeLocation.time = new Date().toISOString())
    )
  );
};
