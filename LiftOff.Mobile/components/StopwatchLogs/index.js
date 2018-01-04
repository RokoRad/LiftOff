import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';

const StopwatchLogs = () => (
  <View>
    <View>
      <Text>Log</Text>
      <Text>Location</Text>
      <Text>Time</Text>
    </View>
    <StopwatchLog />
    <StopwatchLog />
    <StopwatchLog />
    <StopwatchLog />
  </View>
);

export default StopwatchLogs;