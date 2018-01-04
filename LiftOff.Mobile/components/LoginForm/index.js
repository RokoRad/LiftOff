import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';

// kreiranje viewa
const LoginForm = () => (
  <View>
    <InitalButton text="Login" action="login()"/>
  </View>
);

export default LoginForm;