import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import styles from './styles.js';

const Account = ({location}) => (
  <Screen current={location}>
    account
  </Screen>
);

export default Account;