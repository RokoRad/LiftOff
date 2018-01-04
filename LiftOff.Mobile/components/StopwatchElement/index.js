import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const StopwatchElement = ({location}) => (
  <View>
    <Text style={styles.inner}>22</Text>
    :
    <Text style={styles.inner}>33</Text>
  </View>
);

export default StopwatchElement;