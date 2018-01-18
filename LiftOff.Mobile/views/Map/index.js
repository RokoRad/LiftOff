import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
import Dock from '../../components/Dock';
import Tooltip from '../../components/Tooltip';
// import Search from '../../components/Search';
import styles from './styles.js';
import style from '../../functions/mapStyle';
import headers from '../../functions/headers';
import holderEditor from './holderEditor';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

const holder = {
  city: '/',
  time: '/',
  rating: '/'
}, deltas = {
  longitudeDelta: 0.1,
  latitudeDelta: 0.1
}, inital = {
  latitude: 43.5432,
  longitude: 16.49314,
  ...deltas
};

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
    AsyncStorage.getItem('@location').then((response) => {
      if(response) {
        const parsed = JSON.parse(response);

        const object = {
          latitude: parsed.latitude,
          longitude: parsed.longitude,
          ...deltas
        }

        this.setState({
          location: object,
          markerPosition: object
        })
      }
    });

    if(!this.state.render) {
      this.getCurrentLocation()
    }
  }

  componentWillUnmount() {
    AsyncStorage.getItem('@picker').then((timeValue) => {
      console.log(timeValue)
      AsyncStorage.setItem('@timeLocation', JSON.stringify({
        location: this.state.markerPosition,
        time: timeValue
      }));
    });
  }

  getCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
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
        headers: headers(value),
        body: JSON.stringify({
            location: {
              latitude: 43.508133,
              longitude: 16.440193
            },
            time: new Date().toISOString()
          })
      }).then((response) => {
        if(response.status === 200) {
          const parsed = JSON.parse(response._bodyInit);
          holder = holderEditor(parsed.weatherData.city, parsed.totalRating);
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

    AsyncStorage.setItem('@location', JSON.stringify(value.nativeEvent.coordinate)).then();
  }

  calibration = () => {
    console.log("usa u kal")
    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/Api/weather/getBestRatingNearMe', {
        method: 'POST',
        headers: headers(value),
        body: JSON.stringify({
            location: {
              latitude: this.state.center.latitude,
              longitude: this.state.center.longitude
            },
            time: new Date().toISOString()
          })
      }).then((response) => {
        console.log(response)
        if(response.status === 200) {
          const parsed = JSON.parse(response._bodyInit);
          holder = holderEditor(parsed.weatherData.city, parsed.totalRating);
          this.map.animateToCoordinate({
            ...parsed.weatherData.timeLocation.location
          }, 500);
          this.setState({
            calibration: true,
            pressed: true,
            // location: {
            //   ...parsed.weatherData.timeLocation.location,
            //   ...deltas
            // },
            markerPosition: {
              ...parsed.weatherData.timeLocation.location,
              ...deltas
            }
          })
        } else if (response.status === 401) {
          this.props.history.push('/');
        }});
        AsyncStorage.setItem('@location', JSON.stringify(this.state.markerLocation)).then();
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
          {/* <Search /> */}
          <Tooltip displayed={this.state.selected} />
          <Dock calibration={this.calibration} selected={this.selected} />
          <MapView ref={(map) => this.map = map} style={styles.wrapper} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={this.state.location} onRegionChangeComplete={(value) => this.changeCenter(value)} onPress={(value) => this.setMarker(value)}>
            <Marker display={this.state.pressed} location={this.state.markerPosition} calibration={this.state.calibration} city={holder.city} time={holder.time} rating={holder.rating} />
          </MapView>
        </Screen>
      );
  }
}

export default Map;