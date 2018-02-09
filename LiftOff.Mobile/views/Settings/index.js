import React from 'react';
import Expo from 'expo';
import { View, Text, Picker, AsyncStorage, TouchableWithoutFeedback, CheckBox } from 'react-native';
import vars from '../../config/vars.js';
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import Screen from '../../components/Screen';
import Dropdown from '../../components/Dropdown';
import Switch from '../../components/Switch';
import UnitsSwitch from '../../components/UnitsSwitch';
import LanguageSwitch from '../../components/LanguageSwitch';
import LogPermission from '../../components/LogPermission';
import Break from '../../components/Break';
import _logout from './_logout.js';

export default ({ location, history }) => (
  <Screen current={location} style={styles.settings}>
    <View style={styles.wrapper}>
      <Dropdown />
      <Break />
      <LogPermission history={history} />
      <Break />
      <UnitsSwitch />
      <Break />
      <LanguageSwitch />
      <Break />
      <Button type="Logout" onPress={() => _logout(history)} />
    </View>
  </Screen>
);

const changeLanguage = () => {
  AsyncStorage.getItem('@language').then(response => {
    if (response === 'hr') {
      AsyncStorage.setItem('@language', 'en');
    } else {
      AsyncStorage.setItem('@language', 'hr');
    }
    Expo.Util.reload();
  });
};
