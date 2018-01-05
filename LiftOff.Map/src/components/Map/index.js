import React from 'react';
import GoogleMapReact from 'google-map-react';
import options from '../../functions/options';
import './styles.css';

const center = {
  lat: 30,
  lng: 30
}

const currentLocation = () => {
  navigator.geolocation.getCurrentPosition(data);
};

const data = (response) => {
  const center = {
    lat: response['coords'].latitude,
    lng: response['coords'].latitude
  };
};

const Map = (props) => (
  <GoogleMapReact defaultCenter={center} defaultZoom={11} options={options} />
);

export default Map;
