import React, { Component } from 'react';
import { View } from 'react-native';
import Screen from '../../components/Screen';
import MapItem from '../../components/MapItem';
import style from './map.js'
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

const crosshairHolder = {};

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

  onMarker = () => {
    this.setState({
      lat: crosshairHolder.latitude,
      lon: crosshairHolder.longitude
    });
  };

  onCrosshair = () => {
    // SHOW TOOLTIP
  }

  onRegionChange = (region) => {
    crosshairHolder = region;
    console.log(region)
  };

  render() {
      return (
        <Screen current={this.props.location}>
          <MapItem order="1" type="marker" onPress={this.onMarker} />
          <MapItem order="2" type="picker" />
          <MapItem order="3" type="crosshair" onPress={this.onCrosshair} />
          <MapView onRegionChange={this.onRegionChange} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={{ latitude: this.state.lat, longitude: this.state.lon, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
          <MapView.Marker coordinate={{latitude: this.state.lat, longitude: this.state.lon}} title="naslov" description="blabla" />
         </MapView>
        </Screen>
      );
  }
}

export default Map;