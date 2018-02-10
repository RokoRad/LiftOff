import { AsyncStorage } from 'react-native';
import Toast from '../../functions/toast';
import language from '../../languages';

// uklanjanje tokena ako se u provjeri fetchanja dogodi 401 (error nevaljanog tokena)
export default history => {
  AsyncStorage.removeItem('@token').then();
  Toast(`${language.Token}`);
  history.push('/');
};
