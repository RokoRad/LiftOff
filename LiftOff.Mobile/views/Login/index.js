import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import FacebookButton from '../../components/FacebookButton';

const Login = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder />
    <View style={styles.loginBody}>
      <LoginSwitch />
      <View style={styles.inputWrapper}>
        <LoginInput icon="Email"/>
        <LoginInput icon="Password" />
        <FacebookButton />
        {/* FORGOT PASS AND FB LOGIN */}
      </View>
      <LoginButton type="signIn" />
      <KeyboardSpacer />
    </View>
  </View>
);

export default Login;