import React from 'react';
import { View, Text, Picker } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

const data = [
  {location: {latitude: 45.815499, latitudeDelta: 0.1, longitude: 15.966668, longitudeDelta: 0.05}},
  {location: {latitude: 45.815599, latitudeDelta: 0.1, longitude: 15.966768, longitudeDelta: 0.05}},
  {location: {latitude: 45.815699, latitudeDelta: 0.1, longitude: 15.966868, longitudeDelta: 0.05}},
  {location: {latitude: 45.815799, latitudeDelta: 0.1, longitude: 15.966968, longitudeDelta: 0.05}},
  {location: {latitude: 45.815899, latitudeDelta: 0.1, longitude: 15.966568, longitudeDelta: 0.05}}
];

const Account = ({location}) => (
  <Screen current={location}>
    <AccountMap latitude={45.815399} longitude={15.966568} data={data} number={data.length} />
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