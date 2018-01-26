import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import language from '../../languages';

const removeToken = (history) => {
  AsyncStorage.removeItem('@token').then();
  Toast.show(`${language.Token}`);
  history.push('/');
}

export default removeToken;