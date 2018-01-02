import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';
import storage from '../../functions/storage';

const LoginSwitch = (props) => (
  <View style={styles.loginSwitchContainer}>
    <TouchableOpacity style={props.panel === 'login' ? styles.loginSwitchWrapperActive : styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signIn}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={props.panel === 'registration' ? styles.loginSwitchWrapperActive : styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signUp}</Text>
    </TouchableOpacity>
  </View>
);

export default LoginSwitch;