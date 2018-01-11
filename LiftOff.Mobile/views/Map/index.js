import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
//import MapItem from '../../components/MapItem';
// import MarkerCallout from '../../components/MarkerCallout';
import style from '../../functions/mapStyle';
//import DatePicker from '../../external/react-native-datepicker';
//import Toast from 'react-native-simple-toast';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
//import { language } from '../../config/settings.js';
//import { changeDateTime, changeLocation, updateServer, timeLocation } from '../../functions/realtime';

const inital = {
  latitude: 16,
  latitudeDelta: 1,
  longitude: 43,
  longitudeDelta: 1
}

class Map extends Component {
  constructor() {
     super();
     this.state = {
       location: inital,
       center: inital,
       markerPosition: inital,
       pressed: false
     };
  };

  componentWillMount() {
    this.getCurrentLoction();
  }

  getCurrentLoction = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      // odbijen popup
    }
    let location = await Location.getCurrentPositionAsync({}).then((response) => {
      this.setState({
        location: {
          longitude: response.coords.longitude,
          latitude: response.coords.latitude
        }
      });
      console.log(response)
    });
  }

  render() {
      return (
        <Screen current={this.props.location}>
          <MapView style={{ flex:1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={this.state.location} onRegionChange={(value) => this.setState({center: value})}
            onPress={(value) => this.setState({
              markerPosition: value.nativeEvent.coordinate, 
              pressed: true
            })
          }>

          <Marker display={this.state.pressed} location={this.state.markerPosition} />

          {/* <MapView.Marker image={require('../../images/map/pin.png')} style={{height: 30, width: 30}} ref={(ref) => { this.marker = ref; } } coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }}>
            <MarkerCallout location="Primošten, HR" time="15.3.2018." rating="5.0" />
          </MapView.Marker> */}


          </MapView>
        </Screen>
      );
  }
}

export default Map;