import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';
import { language } from '../../config/settings.js';

const LoginRegistration = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Email"/>
      <LoginInput icon="Password" />
      <Text style={styles.forgotPassword}>{language.forgotPassword}</Text>
      <FacebookButton />
    </View>
    <LoginButton type="signIn" />
  </View>
);

export default LoginRegistration;