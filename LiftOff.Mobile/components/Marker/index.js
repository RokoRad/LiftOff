import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import Callout from '../Callout';
import styles from './styles.js';

const Marker = ({display, location, calibration, city, time, rating}) => {
  if(display) {
    console.log("should show")
    return (
      <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={location}>
        <Callout location={city} time={time} rating={rating} shouldShow={calibration} /> 
      </MapView.Marker> 
    )
  } else {
    console.log("should hide")
    return (null);
  }
};

export default Marker;