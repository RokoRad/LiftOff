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
    var triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 0.466, lng: 66.118},
      {lat: 0.321, lng: -64.757},
      {lat: 15.774, lng: -80.190}
    ];

    return (
      <div className="map__container">
        <Search />
        <Map
          className="map"
          google={this.props.google}
          zoom={14}
          disableDefaultUI={true}
          styles={mapStyle}
          initialCenter={this.props.location}
          center={this.props.location}
          onClick={(a, b, event) => _setMarker(event)}
        >


        <Polygon
          paths={triangleCoords}
          strokeColor="#000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#000"
          fillOpacity={0.5} />


          <Marker position={this.props.marker} icon={require('../../images/map/pin.png')} />
        </Map>
        <Dock display={this.props.tooltipStatus} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY'
})(MapContainer);
