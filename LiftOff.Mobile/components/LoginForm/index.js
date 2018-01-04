import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Link } from 'react-router-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';
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
    <Link to="/register">
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          {language.registerAccount} <Text style={styles.messageBold}>{language.register}</Text>
        </Text>
      </View>
    </Link>
    <InitalButton text="login" action="login()"/>
  </View>
);

export default LoginForm;