import Toast from '../../functions/toast';
import { AsyncStorage } from 'react-native';
import encode from './encode.js';
import language from '../../languages';
import { changeLoading } from '../../actions';
import store from '../../store';

export default (data, history) => {
  store.dispatch(changeLoading());
  if (data.username.length != 0 && data.password.length > 8) {
    const object = {
      ...data,
      grant_type: 'password'
    };
    fetch('http://liftoffapi.azurewebsites.net/token', {
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
