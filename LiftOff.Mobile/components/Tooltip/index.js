import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import animationGenerator from '../../functions/animationGenerator';
import language from '../../languages';
import styles from './styles.js';

export default ({ displayed }) => {
  if (displayed) {
    return (
      <Animatable.View
        style={styles.tooltip}
        animation={animationGenerator('picker')}
        iterationCount={1}
        easing="ease-in-out"
        direction="alternate"
      >
        <Text style={styles.text}>{language.ChooseWhen}</Text>
      </Animatable.View>
    );
  } else {
    return null;
  }
};
