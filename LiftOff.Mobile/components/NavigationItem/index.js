import React from 'react';
import { Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles.js';

const NavigationItem = (props) => (
  <TouchableHighlight style={styles.navigationItem}>
    <Image source={require('../../images/map-icon.png')} stlye={styles.navigationItemImage}/>
  </TouchableHighlight>
);

export default NavigationItem;