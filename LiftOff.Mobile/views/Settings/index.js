import React from 'react';
import Expo from 'expo';
import { View, Text, Picker, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import { language } from '../../config/styles.js';
import Screen from '../../components/Screen';

const Settings = ({location}) => (
  <Screen current={location} style={globals.bothAligned}>
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
    </View>
  </Screen>
);


const changeLanguage = () => {
  AsyncStorage.getItem('@language').then((response) => {
    console.log(response)
    if(response === 'hr') {
      AsyncStorage.setItem('@language', 'en');
      console.log("to en")
    } else {
        AsyncStorage.setItem('@language', 'hr');
        console.log("to hr")
    }
    Expo.Util.reload()    
  });
}

export default Settings;