import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';

const Settings = ({location}) => (
  <Screen current={location} style={globals.bothAligned}>
    <View>
    <Picker
    selectedValue="java"
    onValueChange={(lang) => console.log(lang)}>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>
      <Text>
        Settings
      </Text>
    </View>
  </Screen>
);

export default Settings;