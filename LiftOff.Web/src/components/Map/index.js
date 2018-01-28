import React from 'react';
import Dock from '../Dock';
import './style.css';
import mapStyle from './style.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
      <div className="map">
          <Map google={this.props.google} zoom={14} disableDefaultUI={true} styles={mapStyle}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>aa</h1>
                </div>
            </InfoWindow>
          </Map>
        <Dock />
      </div>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY'
})(MapContainer)