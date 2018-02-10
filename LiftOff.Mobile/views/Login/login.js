import Toast from '../../functions/toast';
import { AsyncStorage } from 'react-native';
import encode from './encode.js';
import language from '../../languages';
import { changeLoading } from '../../actions';
import store from '../../store';
import { Platform } from 'react-native';
import headers from '../../functions/headers';

export default (data, history) => {
  // promjena statea i contenta botuna
  store.dispatch(changeLoading());
  // invokanje fetcha ako su podatci fizički validni
  if (data.username.length != 0 && data.password.length > 7) {
    const object = {
      ...data,
      grant_type: 'password'
    };
    fetch('http://liftoffinfokup.azurewebsites.net/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: encode(object)
    })
      .then(response => {
        if (response.status === 200) {
          // spremanje tokena u lokalnu memorij
          AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token).then(() => {
            history.push('/home');
            // za iOS uređaje definiraju se podatci za konekciju sa smartwatchom
            if (Platform.OS === 'ios') {
              var Device = require('react-native').NativeModules.Device;
              Device.deviceName((name) => {
                fetch('http://liftoffinfokup.azurewebsites.net/Api/smartwatch/registerDevice', {
                  method: 'POST',
                  headers: headers(token),
                  body: JSON.stringify({
                    deviceName: name,
                    token: JSON.parse(response._bodyInit).access_token,
                    droneName: store.getState().settingsReducer.drone
                  })
                }).then();
              });
            }
          });
        } else {
          Toast(`${language.serverError}`);
        }
        store.dispatch(changeLoading());
      })
      .catch(error => {
        Toast(`${language.serverError}`);
        store.dispatch(changeLoading());
      });
  } else {
    if (data.password.length < 7) {
      Toast(`${language.passwordError}`);
    } else {
      Toast(`${language.invalidInput}`);
    }
    store.dispatch(changeLoading());
  }
};
