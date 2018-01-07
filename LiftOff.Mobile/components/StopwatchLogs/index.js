import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';

const StopwatchLogs = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.head}>
      <Text style={styles.left}>Log</Text>
      <Text style={styles.middle}>Location</Text>
      <Text style={styles.right}>Time</Text>
    </View>
    <ScrollView style={styles.scroll}>
      {props.data.map((value) => <StopwatchLog location={value.location} time={value.time} active={value.active} key={value.id} />)}
    </ScrollView>
  </View>
);

export default StopwatchLogs;