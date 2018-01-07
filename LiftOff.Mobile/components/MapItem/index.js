import React, { Component } from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';

const icons = {
  marker: require('../../images/map/marker.png'),
  picker: require('../../images/map/date.png'),
  crosshair: require('../../images/map/marker.png')
};

const MapItem = (props) => {
  action = (value) => (
    console.log(value)
  );

  return (
    <TouchableWithoutFeedback onPress={() => action(props.type)}>
      <View style={[globals.bothAligned, styles.item, {bottom: props.order*62.5}]}>
        <Image style={styles.image} source={icons[props.type]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MapItem;