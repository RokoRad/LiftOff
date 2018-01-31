import { AsyncStorage } from 'react-native';
import Toast from '../../functions/toast';
import language from '../../languages';

export default history => {
  AsyncStorage.removeItem('@token').then();
  Toast(`${language.Token}`);
  history.push('/');
};
