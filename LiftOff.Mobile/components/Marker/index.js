import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import Callout from '../Callout';
import styles from './styles.js';

class Marker extends React.Component {
  construcor(props) {
    props(props);
  }

  render() {
    if(this.props.display) {
      return (
        <MapView.Marker image={require('../../images/map/pin.png')} style={styles.marker} coordinate={location} {...this.props}>
          {(calibration) ? <Callout location={this.props.city} time={this.props.time} rating={this.props.rating} /> : null}
        </MapView.Marker> 
      )
    } else {
      return (null);
    }
  }
}

export default Marker;