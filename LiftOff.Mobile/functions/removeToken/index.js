import { AsyncStorage } from 'react-native';

const removeToken = () => {
  AsyncStorage.removeItem('@token').then();
}

export default removeToken;