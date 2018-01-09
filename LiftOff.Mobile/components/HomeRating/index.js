import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles.js';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js'
import colorGenerator from '../../functions/colorGenerator';
import animationGenerator from '../../functions/animationGenerator';
import round from '../../functions/round';

const HomeRating = (props) => (
    <View style={[styles.wrapper, globals[colorGenerator(props.rating)]]}>
      <View style={[styles.top, globals.bothAligned]}>
        <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={animationGenerator(colorGenerator(props.rating))} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.title}>
            {language.ratingTitle}
          </Text>
          <Text style={styles.text}>
            {props.string}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rating}>
              {props.rating}
            {
              // round(props.rating)
              }
          </Text>
        </View>
    </View>
  </View>
);

export default HomeRating;