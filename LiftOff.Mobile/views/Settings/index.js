import React from 'react';
import Expo from 'expo';
import { View, Text, Picker, AsyncStorage, TouchableWithoutFeedback, Switch, CheckBox } from 'react-native';
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import Screen from '../../components/Screen';

export default ({location}) => (
  <Screen current={location} style={styles.bothAligned}>
    <View>
    <Picker
      selectedValue="js"
      onValueChange={(lang) => console.log(lang)}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    
      <Text>
        Settings
      </Text>
      <TouchableWithoutFeedback onPress={() => changeLanguage()}>
        <View><Text>change lang</Text></View>
      </TouchableWithoutFeedback>
      <Switch onValueChange={(value) => console.log(value)} activeText="hr" inActiveText="en" />
      <CheckBox onValueChange={(value) => console.log(value)} onChange={(value) => console.log(value)}/>
      <Button type="Logout" />
    </View>
  </Screen>
);


const changeLanguage = () => {
  AsyncStorage.getItem('@language').then((response) => {
    if(response === 'hr') {
      AsyncStorage.setItem('@language', 'en');
    } else {
        AsyncStorage.setItem('@language', 'hr');
    }
    Expo.Util.reload()    
  });
}