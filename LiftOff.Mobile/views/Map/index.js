import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import MapItem from '../../components/MapItem';
import MarkerCallout from '../../components/MarkerCallout';
import style from '../../functions/mapStyle';
import DatePicker from '../../external/react-native-datepicker';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';

const crosshairHolder = {
  latitude: 43.508133,
  latitudeDelta: 0.0922,
  longitude: 16.440193,
  longitudeDelta: 0.0421
};

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
    // this.getLocation();
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
    this.marker.hideCallout();
  };

  onCrosshair = () => {
    /// REQUEST
    this.setState({
      latitude: 43.6,
      latitudeDelta: 0.09,
      longitude: 16.5,
      longitudeDelta: 0.04
    });
    this.marker.showCallout();
  };

  onRegionChange = (region) => {
    crosshairHolder = region;
  };

  render() {
      return (
        <Screen current={this.props.location}>
          <MapItem order="1" type="marker" onPress={this.onMarker} />
          <DatePicker iconSource={require('../../images/map/date.png')} hideText={true}
            style={{width: 40, height: 40, position: 'absolute', bottom: 125, right: 10, zIndex: 999}} customStyles={{ dateIcon:{width: 40, height: 40 }}} mode="datetime" 
            format="YYYY-MM-DD-hh-mm" minDate={new Date().toISOString().slice(0, 10)} maxDate={new Date(Date.now() + 5*24*60*60*1000).toISOString().slice(0, 10)}
            confirmBtnText="Confirm" cancelBtnText="Cancel" onDateChange={(date) => console.log(date)} cacheEnabled={true} />
          <MapItem order="3" type="crosshair" onPress={this.onCrosshair} />
          <MapView onRegionChange={this.onRegionChange} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} 
            region={{ latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: this.state.latitudeDelta, longitudeDelta: this.state.longitudeDelta }}>
          <MapView.Marker ref={(ref) => { this.marker = ref; } } coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }}>
            <MarkerCallout location="Split, HR" time="12:36 11.6." rating="4.7" />
          </MapView.Marker>
         </MapView>
        </Screen>
      );
  }
}

export default Map;