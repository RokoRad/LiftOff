import React from 'react';
import './style.css';
import { Marker } from 'google-maps-react';

export default ({ location }) => {
  return <Marker position={location} icon={require('../../images/map/zone.png')} />;
};
