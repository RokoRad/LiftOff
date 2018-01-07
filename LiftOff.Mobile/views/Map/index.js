import React, { Component } from 'react';
import { View } from 'react-native';
import Screen from '../../components/Screen';
import MapItem from '../../components/MapItem';
import style from './map.js'
import DatePicker from 'react-native-datepicker'
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

const crosshairHolder = {};

class Map extends Component {
  constructor() {
     super();
     this.state = {
        latitude: 43.508133,
        latitudeDelta: 0.0922,
        longitude: 16.440193,
        longitudeDelta: 0.0421
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
      latitude: crosshairHolder.latitude,
      latitudeDelta: crosshairHolder.latitudeDelta,
      longitude: crosshairHolder.longitude,
      longitudeDelta: crosshairHolder.longitudeDelta
    });
  };

  onCrosshair = () => {
    // SHOW TOOLTIP
  };

  onPicker = () => {

  }

  onRegionChange = (region) => {
    crosshairHolder = region;
    console.log(region)
  };

  render() {
      return (
        <Screen current={this.props.location}>
              <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={new Date().toISOString().slice(0, 10)}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {this.setState({date: date})}}
      />
          <MapItem order="1" type="marker" onPress={this.onMarker} />
          <MapItem order="2" type="picker" onPress={this.onPicker} />
          <MapItem order="3" type="crosshair" onPress={this.onCrosshair} />
          {/* <MapView onRegionChange={this.onRegionChange} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={{ latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: this.state.latitudeDelta, longitudeDelta: this.state.longitudeDelta }}>
          <MapView.Marker coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }} title="naslov" description="blabla" />
         </MapView> */}
        </Screen>
      );
  }
}

export default Map;