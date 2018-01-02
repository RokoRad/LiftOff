import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import FacebookButton from '../../components/FacebookButton';
import { Route, Link } from 'react-router-native';
import { language } from '../../config/settings.js';

const Login = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder />
    <View style={styles.loginBody}>
      <LoginSwitch />
      <View style={styles.inputWrapper}>
        <LoginInput icon="Email"/>
        <LoginInput icon="Password" />
        <Text style={styles.forgotPassword}>{language.forgotPassword}</Text>
        <FacebookButton />
      </View>
      <LoginButton type="signIn" />
      <KeyboardSpacer />
    </View>
  </View>
);

export default Login;