import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { updateLocation, setMarker } from '../../actions';

export default (history) => {
  AsyncStorage.getItem('@token').then(token => {
    fetch('http://liftoffinfokup.azurewebsites.net/Api/logging/showFlightsSwitch', {
      method: 'GET',
      headers: headers(token)
    }).then(response => {
      if (response.status === 200) {
        // const parsed = JSON.parse(response._bodyInit).weatherData.timeLocation;
        // store.dispatch(
        //   updateLocation({
        //     ...parsed.location
        //   })
        console.log(JSON.parse(response))
        // store.dispatch(
        //   setMarker({
        //     ...parsed.location
        //   })
        // );
      } else if (response.status === 401) {
        removeToken(history);
      }
    });
  });
};
