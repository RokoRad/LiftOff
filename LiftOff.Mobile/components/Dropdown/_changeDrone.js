import store from '../../store';
import { AsyncStorage } from 'react-native';
import { changeDrone } from '../../actions';
import { Platform } from 'react-native';

export default drone => {
  store.dispatch(changeDrone((store.getState().settingsReducer.drone = drone)));
  if (Platform.OS === 'ios') {
    AsyncStorage.getItem('@token').then(token => {
      var Device = require('react-native').NativeModules.Device;
      Device.deviceName((name) => {
        fetch('http://liftoffinfokup.azurewebsites.net/Api/smartwatch/registerDevice', {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify({
            deviceName: name,
            token: token,
            droneName: drone
          })
        }).then();
      });
    })
  }
  AsyncStorage.setItem('@drone', drone);
};
