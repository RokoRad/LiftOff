import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import _calibration from './_calibration.js'

const image = require('../../images/map/crosshair.png');

const Calibration = ({history, pass}) => (
  <TouchableWithoutFeedback onPress={() => _calibration(history, pass)}>
    <View style={styles.item}>
      <Image source={image} style={styles.inner} />
    </View>
  </TouchableWithoutFeedback>
);

export default Calibration;