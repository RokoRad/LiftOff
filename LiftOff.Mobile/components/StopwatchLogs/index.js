import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';

const data = [
  {id: 1, active: true, location: 'Čavoglave, Croatia', time: '22:10'},
  {id: 2, active: false, location: 'Čavoglave, Croatia', time: '12:10'},
  {id: 3, active: false, location: 'Čavoglave, Croatia', time: '07:10'}
];

const StopwatchLogs = () => (
  <View style={styles.wrapper}>
    <View style={styles.head}>
      <Text style={styles.left}>Log</Text>
      <Text style={styles.middle}>Location</Text>
      <Text style={styles.right}>Time</Text>
    </View>
    <ScrollView style={styles.scroll}>
      {data.map((value) => <StopwatchLog location={value.location} time={value.time} active={value.active} key={value.id} />)}
    </ScrollView>
  </View>
);

export default StopwatchLogs;

{/* <StopwatchLog active />
<StopwatchLog />
<StopwatchLog active />
<StopwatchLog />
<StopwatchLog />
<StopwatchLog active />
<StopwatchLog />
<StopwatchLog /> */}