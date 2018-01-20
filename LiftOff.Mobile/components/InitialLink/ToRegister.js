import React from 'react';
import { Text } from 'react-native';
import language from '../../languages';
import styles from './styles.js';

const ToRegister = () => (
  <Text>
    {language.ToRegister} <Text style={styles.messageBold}>{language.ToRegisterBold}</Text>
  </Text>
);

export default ToRegister;