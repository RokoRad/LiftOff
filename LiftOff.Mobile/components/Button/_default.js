import React from 'react';
import { Text } from 'react-native';
import styles from './styles.js';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

export default (type) => (
  <Text style={styles.buttonInner}>
    {uppercase(language[type])}
  </Text>
);