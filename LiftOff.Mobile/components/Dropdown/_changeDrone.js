import store from '../../store';
import { AsyncStorage } from 'react-native';
import { changeDrone } from '../../actions';
import { Platform } from 'react-native';

export default drone => {
  store.dispatch(changeDrone((store.getState().settingsReducer.drone = drone)));
  if (Platform.OS === 'ios') {
    // token ti je = JSON.parse(response._bodyInit).access_token
    // drone ti je = drone
    // var Device = require('react-native').NativeModules.Device;
    // Device.deviceName((name) => {
    //   console.log(name)
    // });
  }
  AsyncStorage.setItem('@drone', drone);
};
