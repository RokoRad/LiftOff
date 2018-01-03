import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
// dohvaćanje svih komponenti potrebnih za kreiranje viewa
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import LoginRegistration from '../../components/LoginRegistration';
import FacebookButton from '../../components/FacebookButton';
import { Route } from 'react-router-native'; // dohvaćanje komponente za rutiranje
import Login from '../../views/Login'; // dohvaćanje iduće rute

// kreiranje viewa
const Registration = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder type="register" />
    <View style={styles.loginBody}>
      <LoginSwitch route="registration" />
      <LoginRegistration />
      <KeyboardSpacer />
    </View>
    <Route path="/login" component={Login} />
  </View>
);

export default Registration;