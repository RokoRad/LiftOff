import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Stopwatch = ({location}) => (
  <Screen current={location}>
    <Text>
      Stopwatch
    </Text>
  </Screen>
);

export default Stopwatch;