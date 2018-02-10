import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { changeAllow } from '../../actions';

export default (history) => {
  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffinfokup.azurewebsites.net/Api/logging/showFlightsSwitch', {
      method: 'GET',
      headers: headers(token)
    }).then(response => {
      if (response.status === 200) {
        store.dispatch(changeAllow())
      } else if (response.status === 401) {
        removeToken(history);
      }
    });
  });
};
