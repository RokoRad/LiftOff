import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

// stopwatch element - brojevi
export default ({ minutes, seconds, extended }) => (
  <View style={[styles.wrapper, extended === 0 ? styles.extended : null]}>
    <Text style={styles.inner}>{minutes < 10 ? `0${minutes}` : minutes}</Text>
    <Text style={styles.double}>:</Text>
    <Text style={styles.inner}>{seconds < 10 ? `0${seconds}` : seconds}</Text>
  </View>
);
