import React from 'react';
import Dock from '../Dock';
import './style.css';
import mapStyle from './style.js';
import _setMarker from './_setMarker.js';
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';
import Search from '../Search';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var triangleCoords = [
    //   { lat: 43.538882, lng: 16.3883400 },
    //   { lat: 43.5007916, lng: 16.241055 },
    //   { lat: 43.482360, lng: 16.465588 }
    // ];
    const { google } = this.props || undefined;
    const zoom = 10;
    return (
      <div className="map__container">
        <Search />
        <Map
          className="map"
          google={this.props.google}
          disableDefaultUI={true}
          styles={mapStyle}
          initialCenter={this.props.location}
          center={this.props.location}
          onClick={(a, b, event) => _setMarker(event)}
          zoom={this.props.zoom}
          ref={(map) => { this.map = map }}
        >
          <Marker position={this.props.marker} icon={require('../../images/map/pin.png')} />
          {/* <Marker
            position={{
              lat: 43.55,
              lng: 16.47
            }}
            icon={require('../../images/map/zone.png')}
          /> */}
        </Map>
        <Dock display={this.props.tooltipStatus} />
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY'
})(MapContainer);
