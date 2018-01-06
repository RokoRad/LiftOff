import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Account = ({location}) => (
  <Screen current={location}>
    <Text>acc</Text>
  </Screen>
);

export default Account;