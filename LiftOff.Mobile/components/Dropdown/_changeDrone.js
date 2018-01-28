import store from '../../store';
import { changeDrone } from '../../actions'

export default (drone) => {
  console.log("store", store.getState().settingsReducer.drone)
  store.dispatch(changeDrone(store.getState().settingsReducer.drone = drone));
}