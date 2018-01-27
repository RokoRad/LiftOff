import React from 'react';
import { Text } from 'react-native';
import language from '../../languages';
import styles from './styles.js';

export default () => (
  <Text>
    {language.ToLogin} <Text style={styles.messageBold}>{language.ToLoginBold}</Text>
  </Text>
);