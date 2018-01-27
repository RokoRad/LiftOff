import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import language from '../../languages';

export default = (history) => {
  AsyncStorage.removeItem('@token').then();
  Toast.show(`${language.Token}`);
  history.push('/');
}