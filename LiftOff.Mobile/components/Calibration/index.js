import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';

const image = require('../../images/map/crosshair.png');

const Calibration = ({calibration}) => (
  <TouchableWithoutFeedback onPress={() => console.log("a")}>
    <View style={styles.item}>
      <Image source={image} style={styles.inner} />
    </View>
  </TouchableWithoutFeedback>
);

export default Calibration;