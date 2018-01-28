import React from 'react';
import Dock from '../Dock';
import './style.css';

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

export default ({}) => (
  <div className="map">
    <Map initialZoom={10} initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
      <OverlayView
        style={{ backgroundColor: '#fff' }}
        position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}
      >
        <p>Some content</p>
      </OverlayView>
    </Map>
    <Dock />
  </div>
);
