import React from 'react';
import { Text } from 'react-native';
import language from '../../languages';
import styles from './styles.js';

const ToLogin = () => (
  <Text>
    {language.ToLogin} <Text style={styles.messageBold}>{language.ToLoginBold}</Text>
  </Text>
);

export default ToLogin;