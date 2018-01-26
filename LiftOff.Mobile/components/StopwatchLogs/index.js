import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';
import round from '../../functions/round';

const StopwatchLogs = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.head}>
      <Text style={styles.left}>Log</Text>
      <Text style={styles.middleLeft}>Location</Text>
      <Text style={styles.middleRight}>Score</Text>
      <Text style={styles.right}>Time</Text>
    </View>
    <ScrollView style={styles.scroll}>
      {props.data.map((value) => <StopwatchLog location={value.location} time={value.time} active={value.active} key={value.id} rating={value.rating} />)}
    </ScrollView>
  </View>
);

export default StopwatchLogs;

// {props.data.map((value) => <StopwatchLog location={value.location} time={value.time} active={value.active} key={value.id} rating={value.rating} />)}