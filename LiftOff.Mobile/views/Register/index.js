import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import LoginLogin from '../../components/LoginLogin';
import FacebookButton from '../../components/FacebookButton';
import { Route } from 'react-router-native';
import Login from '../../views/Login';

const Registration = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder />
    <View style={styles.loginBody}>
      <LoginSwitch route="registration" />
      <LoginLogin />
      <KeyboardSpacer />
    </View>
    <Route path="/login" component={Login} />
  </View>
);

export default Registration;