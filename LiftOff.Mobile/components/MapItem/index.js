import React, { Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';

const icons = {
  marker: require('../../images/map/marker.png'),
  crosshair: require('../../images/map/crosshair.png')
};

const MapItem = (props) => (
  <TouchableWithoutFeedback {...props}>
    <View style={[globals.bothAligned, styles.item, {bottom: props.order*62.5}]}>
      <Image style={styles.image} source={icons[props.type]} />
    </View>
  </TouchableWithoutFeedback>
);

export default MapItem;