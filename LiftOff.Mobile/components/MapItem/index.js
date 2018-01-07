import React, { Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';

const icons = {
  marker: require('../../images/map/marker.png'),
  picker: require('../../images/map/date.png'),
  crosshair: require('../../images/map/marker.png')
};

const MapItem = (props) => (
  <TouchableWithoutFeedback>
    <View style={[globals.bothAligned, styles.item, {bottom: props.order*60}]}>
      <Image style={styles.image} source={icons[props.type]} />
    </View>
  </TouchableWithoutFeedback>
);

export default MapItem;