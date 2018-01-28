import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';
import _onChange from './_onChange.js';

export default () => (
  <Switch
    value={true}
    onValueChange={(val) => _onChange(val)}
    disabled={false}
    activeText={'km'}
    inActiveText={'mil'}
    circleSize={50}
    barHeight={50}
    circleBorderWidth={3}
    backgroundActive={vars.red}
    backgroundInactive={vars.blue}
    circleActiveColor={vars.blue}
    circleInActiveColor={vars.red}
  />
)