import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
// dohvaćanje svih komponenti potrebnih za kreiranje viewa
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import LoginLogin from '../../components/LoginLogin';
import FacebookButton from '../../components/FacebookButton';
import { Route } from 'react-router-native'; // dohvaćanje komponent za promjenu rute
import Registration from '../../views/Register'; // dohvaćanje iduće rute

// kreiranje viewa
const Login = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder type="login" />
    <View style={styles.loginBody}>
      <LoginSwitch route="login" />
      <LoginLogin />
      <KeyboardSpacer />
    </View>
    <Route path="/registration" component={Registration} />
  </View>
);

export default Login;