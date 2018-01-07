import React from 'react';
import Screen from '../../components/Screen';
import style from './map.js'
import { MapView } from 'expo';

const Map = ({location}) => (
   <Screen current={location}>
      <MapView
        style={{ flex: 1 }},
        customMapStyle={}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
  </Screen>
);

export default Map;