import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';
import Input from '../Input';
import { language } from '../../config/settings.js'

// kreiranje viewa
const LoginForm = () => (
  <View style={styles.wrapper}>
    <Input icon="Email" />
    <TouchableWithoutFeedback>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          {language.registerAccount} <Text style={styles.messageBold}>{language.register}</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
    <InitalButton text="login" action="login()"/>
  </View>
);

export default LoginForm;