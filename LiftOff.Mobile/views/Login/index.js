import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import LoginRegistration from '../../components/LoginRegistration';
import FacebookButton from '../../components/FacebookButton';
import { Route } from 'react-router-native';
import Registration from '../../views/Register';

const Login = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder />
    <View style={styles.loginBody}>
      <LoginSwitch route="login" />
      <LoginRegistration />
      <KeyboardSpacer />
    </View>
    <Route path="/registration" component={Registration} />
  </View>
);

export default Login;