import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

const LoginLogin = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Email"/>
      <LoginInput icon="Email"/>
      <LoginInput icon="Password" />
      <FacebookButton type="login" />
    </View>
    <LoginButton type="signUp" />
  </View>
);

export default LoginLogin;