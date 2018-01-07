import React from 'react';
import { View, Text, Picker } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

const data = [
  {coordinate: {latitude: 45.815399, latitudeDelta: 0.1, longitude: 15.966568, longitudeDelta: 0.05}},
  {coordinate: {latitude: 45.81539955, latitudeDelta: 0.1, longitude: 15.96656855, longitudeDelta: 0.05}},
  {coordinate: {latitude: 45.815398, latitudeDelta: 0.1, longitude: 15.966567, longitudeDelta: 0.05}},
  {coordinate: {latitude: 45.815397, latitudeDelta: 0.1, longitude: 15.966566, longitudeDelta: 0.05}},
  {coordinate: {latitude: 45.815396, latitudeDelta: 0.1, longitude: 15.966565, longitudeDelta: 0.05}},
  {coordinate: {latitude: 45.815395, latitudeDelta: 0.1, longitude: 15.966564, longitudeDelta: 0.05}}
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