import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import Input from '../Input';

// kreiranje viewa
const LoginForm = () => (
  <View style={styles.wrapper}>
    <View style={styles.inputWrapper}>
      <Input type="Email" />
      <Input type="Password" />
    </View>
    <KeyboardSpacer />
  </View>
);

export default LoginForm;