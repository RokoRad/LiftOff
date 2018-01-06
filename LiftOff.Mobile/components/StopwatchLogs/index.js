import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';

const StopwatchLogs = () => (
  <View style={styles.wrapper}>
    <View style={styles.head}>
      <Text style={styles.left}>Log</Text>
      <Text style={styles.middle}>Location</Text>
      <Text style={styles.right}>Time</Text>
    </View>
    <ScrollView style={styles.scroll}>
      <StopwatchLog active />
      <StopwatchLog />
      <StopwatchLog active />
      <StopwatchLog />
      <StopwatchLog />
      <StopwatchLog active />
      <StopwatchLog />
      <StopwatchLog />
    </ScrollView>
  </View>
);

export default StopwatchLogs;