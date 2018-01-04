import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Stopwatch = ({location}) => (
  <View style={styles.wrapper}>
    <Text style={styles.inner}>{'A'.toUpperCase()}</Text>
  </View>
);

export default Stopwatch;