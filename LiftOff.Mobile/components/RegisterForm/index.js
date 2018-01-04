import React from 'react';
import { View, Text } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles.js';
import InitalButton from '../InitalButton';

// kreiranje viewa
const RegisterForm = () => (
  <View style={styles.wrapper}>
    <KeyboardSpacer />
    <TouchableWithoutFeedback>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          {language.loginAccount} <Text style={styles.messageBold}>{language.login}</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
    <InitalButton text="register" action="register()"/>
  </View>
);

export default RegisterForm;