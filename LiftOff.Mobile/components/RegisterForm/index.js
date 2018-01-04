import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Link } from 'react-router-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';
import Input from '../Input';
import { language } from '../../config/settings.js'

// kreiranje viewa
const RegisterForm = () => (
  <View style={styles.wrapper}>
    <Input icon="Email" />
    <Input icon="Email" />
    <Input icon="Email" />
    <KeyboardSpacer />
    <Link to="/">
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          {language.haveAccount} <Text style={styles.messageBold}>{language.login}</Text>
        </Text>
      </View>
    </Link>
    <InitalButton text="register" action="register()"/>
  </View>
);

export default RegisterForm;