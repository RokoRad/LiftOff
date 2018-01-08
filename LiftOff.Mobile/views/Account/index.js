import React from 'react';
import { View, Text, Picker, ScrollView } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

const Account = ({location}) => (
  <Screen current={location}>
    <AccountMap latitude={45.80} longitude={15.95} />
    <View style={styles.container}>
      <AccountItem title="Username" content="dbaric"/>
      <AccountItem title="Email" content="dbaric@dump.hr"/>
      <Dropdown />
      <ScrollView style={styles.scrollview}>
        <AccountItem title="Total flights" content="18"/>
        <AccountItem title="Total flights" content="18"/>
        <AccountItem title="Total flights" content="18"/>
        <AccountItem title="Total flights" content="18"/>
        <AccountItem title="Total flights" content="18"/>
        <AccountItem title="Total flights" content="18"/>
      </ScrollView>
    </View>
  </Screen>
);

export default Account;