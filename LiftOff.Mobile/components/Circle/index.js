import React from 'react';
import { MapView } from 'expo';

export default ({ location, radius }) => (
  <MapView.Circle
    center={location}
    radius={radius}
    fillColor="rgba(240, 40, 44, 0.6)"
    strokeColor="rgba(240, 40, 44, 0.6)"
  />
);
