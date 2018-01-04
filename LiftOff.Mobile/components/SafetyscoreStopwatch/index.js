import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

const SafetyscoreStopwatch = () => (
  <View style={styles.wrapper}>
    <View style={styles.drone}></View>
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