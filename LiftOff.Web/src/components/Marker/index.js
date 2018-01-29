import React from 'react';
import { Marker } from 'google-maps-react';
import './style.css';

export default ({ onClick, location}) => (
  <Marker onClick={onClick} position={location} icon={{ url: '../../images/map/pin.png' }}/>
);