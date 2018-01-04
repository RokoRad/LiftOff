import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';

const StopwatchLogs = () => (
  <View style={styles.wrapper}>
    <View style={styles.head}>
      <Text style={styles.left}>Log</Text>
      <Text style={styles.middle}>Location</Text>
      <Text style={styles.right}>Time</Text>
    </View>
    <StopwatchLog />
    <StopwatchLog />
    <StopwatchLog />
    <StopwatchLog />
  </View>
);

export default StopwatchLogs;