import React from 'react';
import Screen from '../../components/Screen';
import style from './map.js'
import { MapView, PROVIDER_GOOGLE } from 'expo';

const Map = ({location}) => (
   <Screen current={location}>
      <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} initialRegion={{ latitude: 37.78825, longitude: -122.4324 }} />
  </Screen>
);

export default Map;