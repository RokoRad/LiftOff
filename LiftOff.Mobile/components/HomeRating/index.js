import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles.js';
import globals from '../../config/styles.js';
import colorGenerator from '../../functions/colorGenerator';
import animationGenerator from '../../functions/animationGenerator';
import round from '../../functions/round';
import language from '../../languages';


export default ({string, rating}) => (
    <View style={[styles.wrapper, styles[colorGenerator(rating)]]}>
      <View style={[styles.top, styles.bothAligned]}>
        <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={animationGenerator(colorGenerator(rating))} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.title}>
            {language.WeatherRating}
          </Text>
          <Text style={styles.text}>
            {(language.type === 'hr') ? string.English : string.Croatian}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rating}>
            {round(rating)}
          </Text>
        </View>
    </View>
  </View>
);