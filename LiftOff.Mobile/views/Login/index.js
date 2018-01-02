import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';

const Login = () => (
  <View>
    <LoginHolder />
    <LoginSwitch />
    <LoginInput icon="Email" />
    <LoginButton type="signIn" />
  </View>
);

export default Login;