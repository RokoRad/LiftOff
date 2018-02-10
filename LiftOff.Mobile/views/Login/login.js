import Toast from '../../functions/toast';
import { AsyncStorage } from 'react-native';
import encode from './encode.js';
import language from '../../languages';
import { changeLoading } from '../../actions';
import store from '../../store';
import { Platform } from 'react-native';

export default (data, history) => {
  store.dispatch(changeLoading());
  if (data.username.length != 0 && data.password.length > 8) {
    const object = {
      ...data,
      grant_type: 'password'
    };
    fetch('http://liftoffinfokup.azurewebsites.net/api/account/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: encode(object)
    })
      .then(response => {
        if (response.status === 200) {
          AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token).then(() => {
            history.push('/home');
            if (Platform.OS === 'ios') {
              // token ti je = JSON.parse(response._bodyInit).access_token
              // drone ti je store.getState().settingsReducer.drone
              // var Device = require('react-native').NativeModules.Device;
              // Device.deviceName((name) => {
              //   console.log(name)
              // });
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
