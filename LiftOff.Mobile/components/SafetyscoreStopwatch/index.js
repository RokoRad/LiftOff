import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

const SafetyscoreStopwatch = () => (
  <View style={styles.wrapper}>
    <View style={styles.drone}></View>
    <View style={styles.information}>
      <View>
        <Text style={styles.informationTitle}></Text>
      </View>
      <View>
        <Text style={styles.informationText}></Text>
      </View>
    </View>
    <View style={styles.rating}></View>
  </View>
);

export default SafetyscoreStopwatch;