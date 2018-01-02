import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';

const Login = () => (
  <View style={styles.loginWrapper}>
    <LoginHolder />
    <View style={styles.loginBody}>
      <LoginSwitch />
      <View style={styles.inputWrapper}>
        <LoginInput icon="Email" />
        <LoginInput icon="Password" />
        {/* FORGOT PASS AND FB LOGIN */}
      </View>
      <LoginButton type="signIn" />
    </View>
  </View>
);

export default Login;