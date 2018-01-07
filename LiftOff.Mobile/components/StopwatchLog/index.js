import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const StopwatchLog = () => (
  <View style={styles.wrapper}>
    <View style={styles.left}>
    </View>
    <View style={styles.middle}>
      <Text style={styles.middleInner} numberOfLines={1} ellipsizeMode="tail">Split, Croatia</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.rightInner}>12:22</Text>
    </View>
  </View>

);

export default StopwatchLog;