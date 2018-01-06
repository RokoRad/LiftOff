import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Settings = ({location}) => (
  <Screen current={location}>
    <Text>settings</Text>
  </Screen>
);

export default Settings;