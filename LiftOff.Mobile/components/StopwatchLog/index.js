import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const StopwatchLog = () => (
  <View style={styles.wrapper}>
    <View style={styles.left}>
      <Text style={styles.leftInner}></Text>
    </View>
    <View style={styles.middle}>
      <Text style={styles.middleInner}>Split, Croatia (12.2E, 45N)</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.rightInner}>12:22</Text>
    </View>
  </View>

);

export default StopwatchLog;