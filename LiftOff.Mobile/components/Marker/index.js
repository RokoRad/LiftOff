import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import Callout from '../Callout';
import styles from './styles.js';

const Marker = ({display, location, calibration, city, time, rating}) => {
  if(display) {
    return (
      <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={location}>
        {(calibration) ? <Callout location={city} time={time} rating={rating} /> : null}
      </MapView.Marker> 
    )
  } else {
    return (null);
  }
};

export default Marker;


          {/* <MapView.Marker image={require('../../images/map/pin.png')} style={{height: 30, width: 30}} ref={(ref) => { this.marker = ref; } } coordinate={{latitude: this.state.latitude, latitudeDelta: this.state.latitudeDelta, longitude: this.state.longitude, longitudeDelta: this.state.longitudeDelta }}>
            <MarkerCallout location="Primošten, HR" time="15.3.2018." rating="5.0" />
          </MapView.Marker> */}