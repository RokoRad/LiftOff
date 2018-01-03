import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

const signUp = () => (
  console.log("signup")
);

const LoginLogin = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Full name"/>
      <LoginInput icon="Email"/>
      <LoginInput icon="Password" />
      <FacebookButton type="login" />
    </View>
    <TouchableWithoutFeedback onPress={() => signUp()}>
      <LoginButton type="signUp" />
    </TouchableWithoutFeedback>
  </View>
);

export default LoginLogin;