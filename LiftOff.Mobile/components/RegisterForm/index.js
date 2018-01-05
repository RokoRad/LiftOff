import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import Input from '../Input';

// kreiranje viewa
const RegisterForm = () => (
  <View style={styles.wrapper}>
    <Input icon="Email" />
    <Input icon="Email" />
    <Input icon="Email" />
    <KeyboardSpacer />
  </View>
);

export default RegisterForm;