import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import * as Animatable from 'react-native-animatable';
import colorGenerator from '../../functions/colorGenerator';
import animationGenerator from '../../functions/animationGenerator';

const SafetyscoreStopwatch = (props) => (
  <View style={[styles.wrapper, globals[colorGenerator(props.rating)]]}>
    <View style={styles.droneWrapper}>
      <Animatable.Image source={require('../../images/drone.png')} style={styles.drone} animation={animationGenerator(colorGenerator(props.rating))} iterationCount="infinite" easing="ease-in-out" direction="alternate" />
    </View>
    <View style={styles.information}>
      <View>
        <Text style={styles.informationTitle}>Flight rating:</Text>
      </View>
      <View>
        <Text style={styles.informationText}>Ovo je neki okvir tekst koji se vraća sa backenda. Naime, on se generira i vraća nazad.</Text>
      </View>
    </View>
    <View style={styles.rating}>
      <Text style={styles.ratingInner}>
        6.7
      </Text>
    </View>
  </View>
);

export default SafetyscoreStopwatch;