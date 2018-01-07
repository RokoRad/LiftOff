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
        mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        locationResult: null,
        location: {coords: { latitude: 37.78825, longitude: -122.4324}}
     };
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location });
 };

  render() {
      return (
        <Screen current={this.props.location}>
          <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}/>
        </Screen>
      );
  }
}

export default Map;