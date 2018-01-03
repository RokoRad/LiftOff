import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

const forgotPassword = () => (
  console.log("forgotPassword")
);

const signIn = () => (
  console.log("signin")
);

const LoginRegistration = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Full name" />
      <LoginInput icon="Email"/>
      <LoginInput icon="Password" />
      <FacebookButton type="registration" />
    </View>
    <TouchableWithoutFeedback onPress={() => (signIn())}>
      <LoginButton type="signUp" />
    </TouchableWithoutFeedback>
  </View>
);

export default LoginRegistration;