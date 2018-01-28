import React from 'react';
import Expo from 'expo';
import {
  View,
  Text,
  Picker,
  AsyncStorage,
  TouchableWithoutFeedback,
  CheckBox
} from 'react-native';
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

export default ({ location }) => (
  <Screen current={location}>
    <View style={styles.wrapper}>
    <Dropdown />

      {/*     
change language
change units
*/}

      {/* <CheckBox
        onValueChange={value => console.log(value)}
        onChange={value => console.log(value)}
      /> */}
      <LogPermission />
      <UnitsSwitch />
      <LanguageSwitch />
      {/* <Switch
    value={true}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'HR'}
    inActiveText={'EN'}
    circleSize={50}
    barHeight={50}
    circleBorderWidth={3}
    backgroundActive={vars.red}
    backgroundInactive={vars.blue}
    circleActiveColor={vars.blue}
    circleInActiveColor={vars.red}
  /> */}
      <Button type="Logout" onPress={() => _logout(location)} />
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
