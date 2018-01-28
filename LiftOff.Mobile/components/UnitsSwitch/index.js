import React from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';

export default () => (
  <Switch
    value={true}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'METRIC'}
    inActiveText={'IMPERIAL'}
    circleSize={50}
    barHeight={50}
    circleBorderWidth={3}
    backgroundActive={vars.red}
    backgroundInactive={vars.blue}
    circleActiveColor={vars.blue}
    circleInActiveColor={vars.red}
  />
)