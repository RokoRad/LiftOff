import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import store from '../../store';
import { setMarker, updateLocation } from '../../actions';

export default (value, history, timeLocation) => {
  value.persist();

  AsyncStorage.getItem('@token').then((token) => {
    fetch('http://liftoffapi.azurewebsites.net/api/weather/getScore', {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({
        location: {
          latitude: value.nativeEvent.coordinate.latitude,
          longitude: value.nativeEvent.coordinate.longitude
        },
        time: new Date().toISOString()
      })
    }).then((response) => {
      if(response.status === 200) {
        console.log(JSON.parse(response._bodyInit))
      } else if (response.status === 401) {
        removeToken();
        history.push('/');
      }});
  });

  store.dispatch(setMarker(value.nativeEvent.coordinate));
  store.dispatch(updateLocation(value.nativeEvent.coordinate));

  // this.setState({
  //   markerPosition: value.nativeEvent.coordinate,
  //   pressed: true,      
  //   calibration: false
  // });

}

// setMarker = (value) => {
//   value.persist();
//   AsyncStorage.getItem('@token').then((data) => {
//     fetch('http://liftoffapi.azurewebsites.net/api/weather/getScore', {
//       method: 'POST',
//       headers: headers(data),
//       body: JSON.stringify({
//           location: value.nativeEvent.coordinate,
//           time: new Date().toISOString()
//         })
//     }).then((response) => {
//       if(response.status === 200) {
//         const parsed = JSON.parse(response._bodyInit);
//         holder = holderEditor(parsed.weatherData.city, parsed.totalRating);
//       } else if (response.status === 401) {
//         removeToken();
//         this.props.history.push('/');
//       }}).catch((error) => console.log(error))
//   });
//   if(this.state.selected === false) {
//     this.setState({
//       selected: true
//     })
//   }

//   this.setState({
//     markerPosition: value.nativeEvent.coordinate,
//     pressed: true,      
//     calibration: false
//   });

//   holder = {
//     city: '/',
//     time: '/',
//     rating: '/'
//   }
// }
