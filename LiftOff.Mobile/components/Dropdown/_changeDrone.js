import store from '../../store';
import { AsyncStorage } from 'react-native';
import { changeDrone } from '../../actions'

export default (drone) => {
  store.dispatch(changeDrone(store.getState().settingsReducer.drone = drone));
  AsyncStorage.setItem('@drone', drone);
}