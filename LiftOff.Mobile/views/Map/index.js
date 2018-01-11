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

class Map extends Component {
  constructor() {
     super();
     this.state = {
       location: {
         latitude: 16,
         latitudeDelta: 1,
         longitude: 43,
         longitudeDelta: 1
       },
       center: location,
       markerPosition: location
     };
  };

  componentWillMount() {
    this.getCurrentLoction();
  }

  // 19:10:55: Object {
  //   19:10:55:   "coords": Object {
  //   19:10:55:     "accuracy": 31,
  //   19:10:55:     "altitude": 56,
  //   19:10:55:     "heading": 0,
  //   19:10:55:     "latitude": 43.5404907,
  //   19:10:55:     "longitude": 16.5163469,
  //   19:10:55:     "speed": 0,
  //   19:10:55:   },
  //   19:10:55:   "mocked": false,
  //   19:10:55:   "timestamp": 1515694255980,
  //   19:10:55: }


  componentDidUpdate() {
    console.log(this.state.markerPosition)
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
      })
    });
  }

  render() {
      return (
        <Screen current={this.props.location}>
          <MapView style={{ flex:1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} showsUserLocation={true} region={this.state.location} onRegionChange={(value) => this.setState({center: value})}
            onPress={(value) => this.setState({markerPosition: value.nativeEvent.coordinate})}>

          <Marker location={this.state.location} />

          {/* <MapView.Marker image={require('../../images/map/pin.png')} style={{height: 30, width: 30}} ref={(ref) => { this.marker = ref; } } coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }}>
            <MarkerCallout location="Primošten, HR" time="15.3.2018." rating="5.0" />
          </MapView.Marker> */}


          </MapView>
        </Screen>
      );
  }
}

export default Map;