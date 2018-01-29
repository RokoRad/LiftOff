import React from 'react';
import Dock from '../Dock';
import './style.css';
import mapStyle from './style.js';
import _setMarker from './_setMarker.js';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map">
        <Map google={this.props.google} zoom={14} disableDefaultUI={true} styles={mapStyle} initialCenter={this.props.location} onClick={(a, b, event) => _setMarker(event)}>
          <Marker onClick={this.onMarkerClick} position={this.props.marker} 
          //icon={{ url: '../../images/map/pin.png' }} 
          />

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
