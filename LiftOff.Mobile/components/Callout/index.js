import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import colorGenerator from '../../functions/colorGenerator';
import styles from './styles.js';
import { MapView } from 'expo';

const MarkerCallout = ({location, time, rating}) => (
  <MapView.Callout style={{width: 200}}>
    <View>
      <Text style={styles.title}>{language.markerTitle}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.markerLocation}</Text>
      <Text style={styles.string}>{props.location}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.markerTime}</Text>
      <Text style={styles.string}>{props.time}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.string}>{language.markerRating}</Text>
      <Text style={[styles.string, styles.rating, styles[colorGenerator(props.rating)]]}>{props.rating}</Text>
    </View>
  </MapView.Callout>
);

export default MarkerCallout;