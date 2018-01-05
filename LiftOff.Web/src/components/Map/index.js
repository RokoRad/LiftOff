import React from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';

const center = {lat: 59.95, lng: 30.33};

const Map = (props) => (
  <GoogleMapReact defaultCenter={center} defaultZoom={props.zoom} />
);

export default Map;
