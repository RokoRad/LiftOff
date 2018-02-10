import React from 'react';
import Switch from '../Switch';
import { View, Text } from 'react-native';
import vars from '../../config/vars.js';
import language from '../../languages';
import styles from './styles.js';
import _onChange from './_onChange.js';

export default () => {
  let active;
  if (language.language === 'Croatian') {
    active = true;
  } else {
    active = false;
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{language.changeLanguage}</Text>
      <Switch
        value={active}
        onValueChange={() => _onChange()}
        activeText={'HR'}
        inActiveText={'EN'}
      />
    </View>
  );
};
