import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';

const Stopwatch = ({location}) => (
  <Screen current={location}>
    <SafetyscoreStopwatch />
    <View style={styles.stopwatchHolder}>
      <StopwatchElement />
      : <StopwatchElement />
      : <StopwatchElement />
    </View>
    <View style={styles.paragraphHolder}>
      <Text style={styles.paragraph}></Text>
    </View>
    <View style={styles.resultsHolder}>
      <Text style={styles.results}></Text>
    </View>
  </Screen>
);

export default Stopwatch;