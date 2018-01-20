import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles.js';
import globals from '../../config/styles.js';
// import { lng, language } from '../../config/settings.js'
import colorGenerator from '../../functions/colorGenerator';
import animationGenerator from '../../functions/animationGenerator';
import round from '../../functions/round';


const HomeRating = ({string, rating}) => (
    <View style={[styles.wrapper, globals[colorGenerator(rating)]]}>
      <View style={[styles.top, globals.bothAligned]}>
        <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={animationGenerator(colorGenerator(rating))} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.title}>
            {/* {language.ratingTitle} */}
          </Text>
          <Text style={styles.text}>
            {/* {(lng === 'hr') ? string.Croatian : string.English} */}
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

export default HomeRating;