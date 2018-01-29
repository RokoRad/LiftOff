import React from 'react';
import Dock from '../Dock';
import './style.css';
import mapStyle from './style.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map">
        <Map google={this.props.google} zoom={14} disableDefaultUI={true} styles={mapStyle} initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}>
          <Marker onClick={this.onMarkerClick} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>aa</h1>
            </div>
          </InfoWindow>
        </Map>
        <Dock />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY'
})(MapContainer);
