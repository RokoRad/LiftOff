import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';
import { View, Text } from 'react-native';
import styles from './styles.js';
import language from '../../languages';
import _onChange from './_onChange.js';
import store from '../../store';

export default () => {
  const value = store.getState().settingsReducer.units;

  let state;
  if (value === 'imperial') {
    state = false;
  } else {
    state = true;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{language.changeUnits}</Text>
      <Switch
        value={state}
        onValueChange={val => _onChange(val)}
        activeText={'km'}
        inActiveText={'mil'}
      />
    </View>
  );
};