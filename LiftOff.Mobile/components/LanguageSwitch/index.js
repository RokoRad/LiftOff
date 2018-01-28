import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';
import language from '../../languages';
import _onChange from './_onChange.js';

export default () => {
  let active;
  if (language.language === 'Croatian') {
    active = true;
  } else {
    active = false;
  }
  return (
    <Switch
      value={active}
      onValueChange={() => _onChange()}
      activeText={'HR'}
      inActiveText={'EN'}
    />
  );
};
