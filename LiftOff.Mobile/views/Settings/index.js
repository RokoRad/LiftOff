import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';

const Settings = ({location}) => (
  <Screen current={location} style={globals.bothAligned}>
    <View>
      <Text>
        Settings
      </Text>
      <Text>
        Settings
      </Text>
    </View>
  </Screen>
);

export default Settings;