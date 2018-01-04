import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchInformation from '../../components/StopwatchInformation';

const Stopwatch = ({location}) => (
  <Screen current={location} style={styles.vertical}>
    <StopwatchElement minutes="22" seconds="33" />
    <StopwatchInformation battery="0.3" />
  </Screen>
);

export default Stopwatch;