import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';

const Account = ({location}) => (
  <Screen current={location}>
    <AccountMap latitude={45.815399} longitude={15.966568} />
    <View style={styles.container}>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Username" content="dbaric"/>
    </View>
  </Screen>
);

export default Account;