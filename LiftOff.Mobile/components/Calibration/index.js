import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';

const image = require('../../images/map/crosshair.png');

const Calibration = ({}) => (
  <View style={styles.item}>
    <Image source={image} style={styles.inner} />
  </View>
);

export default Calibration;