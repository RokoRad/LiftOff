import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
import Dock from '../../components/Dock';
import Tooltip from '../../components/Tooltip';
import styles from './styles.js';
import style from '../../functions/mapStyle';
import round from '../../functions/round';
//import DatePicker from '../../external/react-native-datepicker';
//import Toast from 'react-native-simple-toast';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
//import { language } from '../../config/settings.js';
//import { changeDateTime, changeLocation, updateServer, timeLocation } from '../../functions/realtime';

const holder = {
  city: '/',
  time: '/',
  rating: '/'
}

const deltas = {
  longitudeDelta: 0.1,
  latitudeDelta: 0.1
};

const inital = {
  latitude: 43.5432,
  longitude: 16.49314,
  ...deltas
};

const rend = 1;

class Map extends Component {
  constructor() {
     super();
     this.state = {
       location: inital,
       center: inital,
       markerPosition: inital,
       pressed: false,
       render: false,
       selected: false,
       calibration: false
     };
  };

  componentWillMount() {
    if(!this.state.render) {
      this.getCurrentLocation
    }
  }

  getCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      // odbijen popup
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true, maximumAge: 900}).then((response) => {
      this.setState({
        location: {
          longitude: response.coords.longitude,
          latitude: response.coords.latitude,
          ...deltas
        },
        render: true
      });
    });
  }

  changeCenter = (value) => {
    this.setState({
      location: value
    })
  }

  setMarker = (value) => {
    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/weather/getScore', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + value,
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
            location: {
              latitude: 43.508133,
              longitude: 16.440193
            },
            time: "2018-01-13T14:12:10+00:00"
          })
      }).then((response) => {
        if(response.status === 200) {
          const parsed = JSON.parse(response._bodyInit);
          holder.city = parsed.weatherData.city;
          holder.rating = round(parsed.totalRating);
          let date = new Date();
              mm = date.getMinutes();
              hh = date.getHours();
          holder.time = `${hh}:${mm}`;
          this.setState({
            calibration: true,
            pressed: true,
            location: {
              longitude: response.coords.longitude,
              latitude: response.coords.latitude,
              ...deltas
            },
            markerPosition: {
              longitude: response.coords.longitude,
              latitude: response.coords.latitude,
              ...deltas
            }
          })
        } else if (response.status === 401) {
          this.props.history.push('/');
        }}).catch((error) => console.log(error))
    });
    if(this.state.selected === false) {
      this.setState({
        selected: true
      })
    }
    this.setState({
      markerPosition: value.nativeEvent.coordinate,
      pressed: true,      
      calibration: false
    });
    holder = {
      city: '/',
      time: '/',
      rating: '/'
    }
  }

  calibration = () => {
    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + value,
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
            location: {
              latitude: this.state.center.latitude,
              longitude: this.state.center.longitude
            },
            time: "2018-01-13T14:12:10+00:00"
          })
      }).then((response) => {
        if(response.status === 200) {
          const parsed = JSON.parse(response._bodyInit);
          holder.city = parsed.weatherData.city;
          holder.rating = round(parsed.totalRating);
          let date = new Date();
              mm = date.getMinutes();
              hh = date.getHours();
          holder.time = `${hh}:${mm}`;
          this.setState({
            calibration: true,
            pressed: true,
            location: {
              ...parsed.weatherData.timeLocation.location,
              ...deltas
            },
            markerPosition: {
              ...parsed.weatherData.timeLocation.location,
              ...deltas
            }
          })
        } else if (response.status === 401) {
          this.props.history.push('/');
        }})
    });
  }

  selected = () => {
    this.setState({
      selected: false
    });
  }


  render() {
      return (
        <Screen current={this.props.location}>
          <Tooltip displayed={this.state.selected} />
          <Dock calibration={this.calibration} selected={this.selected} />
          <MapView style={styles.wrapper} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={this.state.location} onRegionChangeComplete={(value) => this.changeCenter(value)} onPress={(value) => this.setMarker(value)}>
            <Marker display={this.state.pressed} location={this.state.markerPosition} calibration={this.state.calibration} city={holder.city} time={holder.time} rating={holder.rating} />
          </MapView>
        </Screen>
      );
  }
}

export default Map;