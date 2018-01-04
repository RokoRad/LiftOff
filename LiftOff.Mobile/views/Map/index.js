import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Map = ({location}) => (
  <Screen current={location}>
    <Text>
      Map
    </Text>
  </Screen>
);

export default Map;