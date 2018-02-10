import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import style from '../../functions/mapStyle';
import styles from './styles.js';
import _grabMarkers from './_grabMarkers';

export default ({ markers, location, moreThan, flewHere }) => {
  _grabMarkers(location);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        <Image source={require('../../images/map/fire.png')} style={styles.image} /> {moreThan}
        {markers.length}
        {flewHere}
      </Text>
      <MapView
        zoomEnabled={true}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={style}
        cacheEnabled={true}
        region={{ ...location, latitudeDelta: 0.1, longitudeDelta: 0.05 }}
      >
        {markers.map((marker, index) => (
          <MapView.Marker
            coordinate={marker.flightLocation}
            key={index}
            image={require('../../images/map/pin.png')}
          />
        ))}
      </MapView>
    </View>
  );
};
