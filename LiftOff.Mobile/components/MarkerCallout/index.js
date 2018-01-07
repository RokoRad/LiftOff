import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import { MapView } from 'expo';

const MarkerCallout = (props) => (
  <MapView.Callout>
    <View>
      <Text style={styles.title}>{language.markerTitle}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.left}>{language.markerLocation}</Text>
      <Text style={styles.right}>{props.location}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.left}>{language.markerTime}</Text>
      <Text style={styles.right}>{props.time}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.left}>{language.markerRating}</Text>
      <Text style={[styles.right, styles.rating]}>{props.rating}</Text>
    </View>
  </MapView.Callout>
);

export default MarkerCallout;