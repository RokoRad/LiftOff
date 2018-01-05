import React from 'react';
import GoogleMapReact from 'google-map-react';
import options from '../../functions/options';
import './styles.css';

const center = {lat: 59.95, lng: 30.33};

const Map = (props) => (
  <GoogleMapReact defaultCenter={center} defaultZoom={props.zoom} options={options} />
);

export default Map;
