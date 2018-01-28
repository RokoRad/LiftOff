import { AsyncStorage } from 'react-native';
import Expo from 'expo';

export default () => {
  AsyncStorage.getItem('@language').then(response => {
    if (response === 'hr') {
      AsyncStorage.setItem('@language', 'en');
    } else {
      AsyncStorage.setItem('@language', 'hr');
    }
    Expo.Util.reload();
  });
}