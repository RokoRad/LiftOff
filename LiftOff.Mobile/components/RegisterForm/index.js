import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import Input from '../Input';
import { language } from '../../config/settings.js'

// kreiranje viewa
const RegisterForm = () => (
  <View style={styles.wrapper}>
    <Input icon="Email" />
    <Input icon="Email" />
    <Input icon="Email" />
    <KeyboardSpacer />
    <View style={styles.messageWrapper}>
      <Text style={styles.message}>
        {language.haveAccount} <Text style={styles.messageBold}>{language.login}</Text>
      </Text>
    </View>
  </View>
);

export default RegisterForm;