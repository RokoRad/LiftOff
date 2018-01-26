import React, { Component } from 'react';
import { View, Text } from 'react-native';
import language from '../../languages';
import colorGenerator from '../../functions/colorGenerator';
import styles from './styles.js';
import { MapView } from 'expo';
import round from '../../functions/round'

const MarkerCallout = ({location, time, rating}) => (
  <MapView.Callout style={styles.wrapper}>
      <View>
      <Text style={styles.title}>{language.TooltipTitle}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.Location}</Text>
      <Text style={styles.string}>{location}</Text>
      </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.Time}</Text>
      <Text style={styles.string}>{time}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.ExpectedScore}</Text>
      <Text style={[styles.string, styles.rating, styles[colorGenerator(rating)]]}>{round(rating)}</Text>
    </View>
  </MapView.Callout>
);

export default MarkerCallout;