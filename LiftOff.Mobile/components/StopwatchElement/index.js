import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const StopwatchElement = (props) => (
  <View style={styles.wrapper}>
    <Text style={styles.inner}>{props.minutes}</Text>
    <Text style={styles.double}>:</Text>
    <Text style={styles.inner}>{props.seconds}</Text>
  </View>
);

export default StopwatchElement;