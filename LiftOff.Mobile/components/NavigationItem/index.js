import React from 'react';
import { Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles.js';

const NavigationItem = (props) => (
  <TouchableHighlight style={styles.navigationItem}>
    {
      props.button 
      ? <Text style={{backgroundColor: 'red'}}>LitOff</Text>
      : <Image source={require('../../images/map-icon.png')} style={styles.navigationItemImage}/>
    }
  </TouchableHighlight>
);

export default NavigationItem;