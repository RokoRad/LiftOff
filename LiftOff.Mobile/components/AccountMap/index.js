import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
import styles from './styles.js';

const AccountMap = (props) => (
  <View style={styles.wrapper}>
    <MapView onRegionChange={this.onRegionChange} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style}
      region={{ latitude: props.latitude, longitude: props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }}>
    </MapView>
  </View>
);

export default AccountMap;