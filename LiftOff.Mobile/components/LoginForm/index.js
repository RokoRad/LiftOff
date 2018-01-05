import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import Input from '../Input';
import { language } from '../../config/settings.js'

// kreiranje viewa
const LoginForm = () => (
  <View style={styles.wrapper}>
    <View style={styles.inputWrapper}>
      <Input icon="Email" />
      <Input icon="Email" />
    </View>
    <KeyboardSpacer />
    <View style={styles.messageWrapper}>
       <Text style={styles.message}>
        {language.registerAccount} <Text style={styles.messageBold}>{language.register}</Text>
      </Text>
    </View>
  </View>
);

export default LoginForm;