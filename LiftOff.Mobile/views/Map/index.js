import React, { Component } from 'react';
import Screen from '../../components/Screen';
import style from './map.js'
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
  };

class Map extends Component {
  constructor() {
     super();
     this.state = {
        lat: 42,
        lon: 42
     };
  };

  componentDidMount() {
    this.getLocation();
  }

//   getLocation = async () => {
//    let { status } = await Permissions.askAsync(Permissions.LOCATION);
//    let temp = await Location.getCurrentPositionAsync();
//    if (status === 'granted') {
//     this.setState({
//       location: temp
//     });
//     console.log(await Location.getCurrentPositionAsync())
//    } else {
//  //blabla
//    }
//   }

  getLocation = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      Location.getCurrentPositionAsync({enableHighAccuracy: true}).then((response) => {
        this.setState({lon: response.coords.longitude, lat: response.coords.latitude});
        console.log(position)
      });
    }
  }

  render() {
      return (
        <Screen current={this.props.location}>
          <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} 
          region={{ latitude: this.state.lat, longitude: this.state.lon, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          />
        </Screen>
      );
  }
}

export default Map;