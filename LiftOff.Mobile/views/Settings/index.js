import React from 'react';
import Expo from 'expo';
import {
  View,
  Text,
  Picker,
  AsyncStorage,
  TouchableWithoutFeedback,
  Switch,
  CheckBox
} from 'react-native';
import { Switch } from 'react-native-switch';
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import Screen from '../../components/Screen';
import Dropdown from '../../components/Dropdown';
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
      <Switch
    value={true}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
    circleSize={30}
    barHeight={1}
    circleBorderWidth={3}
    backgroundActive={'green'}
    backgroundInactive={'gray'}
    circleActiveColor={'#30a566'}
    circleInActiveColor={'#000000'}
  />
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
