import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import store from '../../store';

export default (history) => {
  console.log(store.getState().mapReducer.markerPosition)
  AsyncStorage.getItem('@token').then((token) => {
    fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        //timeLocation sa currentTime i currentLoc
      })
    }).then((response) => {
      if(response.status === 200) {
        console.log(JSON.parse(response));
//         this.map.animateToCoordinate({
//           ...parsed.weatherData.timeLocation.location
//         }, 500);
        // data u redux
      } else if (response.status === 401) {
        // removeToken();
        // history.push('/');
      }
    })
  });
}