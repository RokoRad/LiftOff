import { changeMenu } from '../../actions';
import store from '../../store';

export default () => {
  store.dispatch(changeMenu({}));
};
