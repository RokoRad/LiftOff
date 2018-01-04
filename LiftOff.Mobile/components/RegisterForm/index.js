import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';

// kreiranje viewa
const RegisterForm = () => (
  <View>
    <InitalButton text="Register" action="register()"/>
  </View>
);

export default RegisterForm;