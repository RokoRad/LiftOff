import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import MapItem from '../../components/MapItem';
import MarkerCallout from '../../components/MarkerCallout';
import style from '../../functions/mapStyle';
import DatePicker from '../../external/react-native-datepicker';
import Toast from 'react-native-simple-toast';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
import { language } from '../../config/settings.js';
import { changeDateTime, changeLocation, updateServer, timeLocation } from '../../functions/realtime';

class Map extends Component {
  constructor() {
     super();
     this.state = {
       location: {
         latitude: 22,
         latitudeDelta: 1,
         longitude: 22,
         longitudeDelta: 1
       }
     };
  };

  render() {
      return (
        <Screen current={this.props.location}>
          <MapView style={{ flex:1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={this.state.location} onRegionChange={this.onRegionChange}>
          

          <MapView.Marker image={require('../../images/map/pin.png')} style={{height: 30, width: 30}} ref={(ref) => { this.marker = ref; } } coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }}>
            <MarkerCallout location="Primošten, HR" time="15.3.2018." rating="5.0" />
          </MapView.Marker>


          </MapView>
        </Screen>
      );
  }
}

export default Map;