import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import animationGenerator from '../../functions/animationGenerator';
import styles from './styles.js';

const Tooltip = ({displayed}) => {
  if(displayed) {
    return (
      <Animatable.View style={styles.tooltip} animation={animationGenerator('picker')} iterationCount={1} easing="ease-in-out" direction="alternate">
        <Text style={styles.text}>Choose when</Text>
      </Animatable.View>  
    );
  } else {
    return (null);
  }
};

export default Tooltip;