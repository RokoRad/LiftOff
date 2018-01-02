import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

const LoginSwitch = (props) => (
  <View style={styles.loginSwitchContainer}>
    <TouchableOpacity style={styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signIn}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signUp}</Text>
    </TouchableOpacity>
  </View>
);

export default LoginSwitch;