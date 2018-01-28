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
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import Screen from '../../components/Screen';
import Dropdown from '../../components/Dropdown';

export default ({ location }) => (
  <Screen current={location}>
    <View style={styles.wrapper}>
    <Dropdown />
    
      {/*     
change language
change units
show others where i fly
choose drone
logout
lawbook za hr

*/}

      <CheckBox
        onValueChange={value => console.log(value)}
        onChange={value => console.log(value)}
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
