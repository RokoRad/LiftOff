import React from 'react';
import { Text } from 'react-native';
import language from '../../languages';
import styles from './styles.js';

// poveznica na registraciju
export default () => (
  <Text>
    {language.ToRegister} <Text style={styles.messageBold}>{language.ToRegisterBold}</Text>
  </Text>
);
