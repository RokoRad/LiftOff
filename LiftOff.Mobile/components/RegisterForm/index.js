import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import Input from '../Input';

// kreiranje viewa
const RegisterForm = () => (
  <View style={styles.wrapper}>
    <Input type="username" />
    <Input type="email" />
    <Input type="password" />
    <KeyboardSpacer />
  </View>
);

export default RegisterForm;