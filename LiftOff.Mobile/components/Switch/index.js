import React from 'react';
import { Switch } from 'react-native-switch';
import styles from './styles.js';
import vars from '../../config/vars.js';

export default (props) => (
  <Switch 
    circleSize={50}
    barHeight={50}
    circleBorderWidth={3}
    backgroundActive={vars.red}
    backgroundInactive={vars.blue}
    circleActiveColor={vars.blue}
    circleInActiveColor={vars.red}
    {...props} 
  />
)