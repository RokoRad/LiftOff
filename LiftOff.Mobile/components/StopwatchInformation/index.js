import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const StopwatchInformation = (props) => (
  <View style={styles.holder}>
    <View style={styles.wrapper}>
      <Text style={styles.inner}>Estimated battery life:</Text>
    </View>
    <View style={styles.wrapper}>
      <Text style={(props.battery > 0.3) ? (props.battery > 0.7 ? styles.green : styles.orange) : styles.red}>30 min</Text>
    </View>
  </View>
);

export default StopwatchInformation;