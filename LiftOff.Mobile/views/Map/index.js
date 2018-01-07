import React, { Component } from 'react';
import Screen from '../../components/Screen';
import style from './map.js'
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

class Map extends Component {
  constructor() {
     super();
     this.state = {
        lat: 43.508133,
        lon: 16.440193
     };
  };

  componentWillMount() {
    this.getLocation();
  }

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let value = await Location.getCurrentPositionAsync({timeout: 2000, maximumAge: 1000});
      this.setState({ lat: value.coords.latitude, lon: value.coords.longitude });
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