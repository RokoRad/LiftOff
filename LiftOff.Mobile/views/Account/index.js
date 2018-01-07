import React from 'react';
import { View, Text, Picker } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

const data = [
  {location: {latitude: 45.815399, latitudeDelta: 0.1, longitude: 15.866568, longitudeDelta: 0.05}},
  {location: {latitude: 45.915399, latitudeDelta: 0.1, longitude: 15.766568, longitudeDelta: 0.05}},
  {location: {latitude: 45.715399, latitudeDelta: 0.1, longitude: 15.666568, longitudeDelta: 0.05}},
  {location: {latitude: 45.615399, latitudeDelta: 0.1, longitude: 15.566568, longitudeDelta: 0.05}},
  {location: {latitude: 45.515399, latitudeDelta: 0.1, longitude: 15.466568, longitudeDelta: 0.05}}
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