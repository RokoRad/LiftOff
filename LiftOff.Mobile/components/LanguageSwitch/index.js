import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';

export default () => (
  <Switch
    value={true}
    onValueChange={(val) => _onChange(val)}
    disabled={false}
    activeText={'HR'}
    inActiveText={'EN'}
    circleSize={50}
    barHeight={50}
    circleBorderWidth={3}
    backgroundActive={vars.red}
    backgroundInactive={vars.blue}
    circleActiveColor={vars.blue}
    circleInActiveColor={vars.red}
  />
)