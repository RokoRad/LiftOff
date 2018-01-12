import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import Callout from '../Callout';
import styles from './styles.js';

const Marker = ({display, location, calibration, city, time, rating}) => {
  if(display) {
    return (
      <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={location}>
        {(calibration) ?
        <Callout location={city} time={time} rating={rating} /> 
        : <Callout location="" time="" rating="" style={{width: 0}} /> 
        }
      </MapView.Marker> 
    )
  } else {
    return (null);
  }
};

export default Marker;