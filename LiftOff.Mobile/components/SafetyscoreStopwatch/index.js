import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import * as Animatable from 'react-native-animatable';
import colorGenerator from '../../functions/colorGenerator';
import animationGenerator from '../../functions/animationGenerator';
import language from '../../languages';
import round from '../../functions/round';

const SafetyscoreStopwatch = ({comment, rating}) => (
  <View style={[styles.wrapper, globals[colorGenerator(rating)]]}>
    <View style={[styles.droneWrapper, globals.bothAligned]}>
      <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={animationGenerator(colorGenerator(rating))} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
    </View>
    <View style={styles.information}>
      <View>
        <Text style={styles.informationTitle}>{language.WeatherRating}</Text>
      </View>
      <View>
        <Text style={styles.informationText}>{comment.Croatian}</Text>
      </View>
    </View>
    <View style={[styles.rating, globals.bothAligned]}>
      <Text style={styles.ratingInner}>
        {round(rating)}
      </Text>
    </View>
  </View>
);

export default SafetyscoreStopwatch;