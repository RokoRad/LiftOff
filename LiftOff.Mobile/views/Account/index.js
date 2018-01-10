import React from 'react';
import { View, Text, Picker, ScrollView, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

// "_bodyInit": "{\"id\":\"14114859-8b49-4bf9-bd9a-78969cb085ea\",\"userName\":null,\"totalTimeFlown\":828,\"totalFlights\":12,\"totalFlySafeScore\":26.399999999999995,\"favoriteFlightTime\":\"Afternoon\",\"favoriteFlightSpot\":\"Split\",\"showWhereIFly\":true}",


const stats = AsyncStorage.getItem('@stats').then((value) => JSON.parse(value));

const Account = ({location}) => (
  <Screen current={location}>
  {console.log(stats)}
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