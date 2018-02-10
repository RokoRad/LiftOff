import { AsyncStorage } from 'react-native';
import Expo from 'expo';

// promejna jezika vrši se na lokal storage razini
export default () => {
  AsyncStorage.getItem('@language').then(response => {
    if (response === 'hr') {
      AsyncStorage.setItem('@language', 'en');
    } else {
      AsyncStorage.setItem('@language', 'hr');
    }
    Expo.Util.reload();
  });
};
