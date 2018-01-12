import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import Callout from '../Callout';
import styles from './styles.js';

class Marker extends React.Component {
  constructor(props) {
    super(props);
    //this.marker = this.marker.bind(this);
  }

  render() {
    return (
      <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={this.props.location} ref={(e) => this.marker = e}>
        <Callout location={this.props.city} time={this.props.time} rating={this.props.rating} shouldShow={this.props.calibration} /> 
      </MapView.Marker> 
    )
  }
}

// const Marker = ({display, location, calibration, city, time, rating}) => {
//   console.log(calibration)
//   if(display) {
//     return (
//       <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={location}>
//         <Callout location={city} time={time} rating={rating} shouldShow={calibration} /> 
//       </MapView.Marker> 
//     )
//   } else {
//     return (null);
//   }
// };

export default Marker;