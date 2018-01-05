import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import options from '../../functions/options';
import './styles.css';

// const currentLocation = () => {
//   navigator.geolocation.getCurrentPosition(data);
// };

// const data = (response) => {
//   const center = {
//     lat: response['coords'].latitude,
//     lng: response['coords'].latitude
//   };
//   console.log(center);
//   return center;
// };

// window.onload = function() {
//   currentLocation();
// };

// const Map = (props) => (
//   <GoogleMapReact defaultCenter={center} defaultZoom={props.zoom} options={options} />
// );

// export default Map;


class Map extends Component {
  constructor() {
     super();
     this.state = {
        center: {
          lat: 30,
          lng: 30
        }
     };
  };

  // changeView = () => {
  //   this.setState({
  //      login: !this.state.login 
  //   });
  // };

  render() {
      return (
        <GoogleMapReact defaultCenter={this.state.center} defaultZoom={11} options={options} />
      );
  }
}

export default Map;