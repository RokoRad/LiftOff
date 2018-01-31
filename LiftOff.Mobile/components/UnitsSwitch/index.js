import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';
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
    <Switch
      value={state}
      onValueChange={val => _onChange(val)}
      activeText={'km'}
      inActiveText={'mil'}
    />
  );
};
