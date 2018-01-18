import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native';
import encode from './encode.js';

const login = (data, history) => {
  if(data.username.length != 0 && data.password.length > 8) {
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
    }).then((response) => {
      if(response.status === 200) {
        AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token).then(() => {
          history.push('/home');
        });
      } else {
        // puka server
      }
    }).catch((error) => {
      // puka server
    });
  } else {
    if(data.password.length < 9) {
      // password manji od 8
    } else {
      // Toast.show("") KRIVI PODATCI
    }
  }
}

export default login;

