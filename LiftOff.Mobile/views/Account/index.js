import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import styles from './styles.js';

const Account = ({location}) => (
  <Screen current={location}>
    <AccountItem title="Username" content="dbaric"/>
    <AccountItem title="Username" content="dbaric"/>
    <AccountItem title="Username" content="dbaric"/>
    <AccountItem title="Username" content="dbaric"/>
    <AccountItem title="Username" content="dbaric"/>
    <AccountItem title="Username" content="dbaric"/>
  </Screen>
);

export default Account;