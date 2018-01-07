import React from 'react';
import { View, Text, Picker } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

const data = [
  {location: {latitude: '', latitudeDelta: '', longitude: '', longitudeDelta: ''}}
];

const Account = ({location}) => (
  <Screen current={location}>
    <AccountMap latitude={45.815399} longitude={15.966568} data="" />
    <View style={styles.container}>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Email" content="dbaric@dump.hr"/>
      <Dropdown />
      <AccountItem title="Total flights" content="18"/>
      <AccountItem title="Total flights" content="18"/>
      <AccountItem title="Total flights" content="18"/>
      <AccountItem title="Total flights" content="18"/>
      <AccountItem title="Total flights" content="18"/>
      <AccountItem title="Total flights" content="18"/>
    </View>
  </Screen>
);

export default Account;