import store from '../../store';
import { AsyncStorage } from 'react-native';
import { saveLog } from '../../actions';
import headers from '../../functions/headers';

export default (id) => {
  store.dispatch(saveLog(id));
  console.log(id)
  AsyncStorage.getItem('@token').then((token) => {
    // fetch('', {
    //   method: 'POST',
    //   headers: headers(token),
    //   body: JSON.stringify({

    //   });
    // })
  });
}