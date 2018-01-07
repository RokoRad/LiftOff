import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import { MapView } from 'expo';

const MarkerCallout = (props) => (
  <MapView.Callout>
    <View>
      <Text>{language.markerTitle}</Text>
    </View>
    <View>
      <Text>{language.markerLocation}</Text>
      <Text>{props.location}</Text>
    </View>
    <View>
      <Text>{language.markerTime}</Text>
      <Text>{props.time}</Text>
    </View>
    <View>
      <Text>{language.markerRating}</Text>
      <Text>{props.rating}</Text>
    </View>
  </MapView.Callout>
);

export default MarkerCallout;