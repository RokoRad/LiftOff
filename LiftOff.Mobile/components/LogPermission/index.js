import React from 'react';
import Expo from 'expo';
import { View, Text, CheckBox } from 'react-native';
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import _onChange from './_onChange.js';

export default (history) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{language.Permission}</Text>
    <CheckBox status={true} onChange={() => _onChange(history)} />
  </View>
);
