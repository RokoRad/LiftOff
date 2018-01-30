import React from 'react';
import Dock from '../Dock';
import './style.css';
import mapStyle from './style.js';
import _setMarker from './_setMarker.js';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Search from '../Search'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tooltipStatus)
    return (
      <div className="map">
        <Search />
        <Map
          google={this.props.google}
          zoom={14}
          disableDefaultUI={true}
          styles={mapStyle}
          initialCenter={this.props.location}
          onClick={(a, b, event) => _setMarker(event)}
        >
          <Marker
            onClick={() => console.log('a')}
            position={this.props.marker}
            //icon={{ url: '../../images/map/pin.png' }}
          />
        </Map>
        <Dock display={this.props.tooltipStatus} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY'
})(MapContainer);
