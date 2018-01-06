import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles.js';
import { language } from '../../config/settings.js'
import colorGenerator from '../../functions/colorGenerator';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotation: -1
    },
    to: {
      rotation: 1
    }    
  },
  orange: {
    from: {
      rotation: -2
    },
    to: {
      rotation: 2
    }    
  },
  red: {
    from: {
      rotation: -3
    },
    to: {
      rotation: 3
    }    
  }
});

const HomeRating = (props) => (
    <View style={[styles.wrapper, styles[colorGenerator(props.rating)]]}>
      <View style={styles.top}>
        <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={colorGenerator(props.rating)} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
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
          </Text>
        </View>
    </View>
  </View>
);

export default HomeRating;