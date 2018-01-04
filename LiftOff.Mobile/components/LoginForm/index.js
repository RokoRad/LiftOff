import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';

// kreiranje viewa
const LoginForm = () => (
  <View style={styles.wrapper}>
    <InitalButton text="login" action="login()"/>
  </View>
);

export default LoginForm;