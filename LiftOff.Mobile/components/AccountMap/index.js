import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import * as Animatable from 'react-native-animatable';
import animationGenerator from '../../functions/animationGenerator';
import style from '../../functions/mapStyle';
import styles from './styles.js';
// api/flights/getFlightsNearMe

const grabMarkers = () => {
  fetch('http://liftoffapi.azurewebsites.net/api/flights/getFlightsNearMe', {
      method: 'POST',
    // body je timeLocation {
      body: JSON.stringify({
        TimeLocation: {
          Location: {
            Latitude: 43.508133,
            Longitude: 16.440193
          },
          Time: new Date().toISOString()
        }
      })
    }).then((response) => {
    console.log(response)
  })
};

// "TimeLocation": {
//   "Location": {
//       "Latitude": double,
//       "Longitude": double
//   },
//   "Time": datetime
// }

var response = [
  {title:'1', coordinate: {latitude: 45.81, longitude: 15.9 }},
  {title:'2', coordinate: {latitude: 45.82, longitude: 15.85 }},
  {title:'ž', coordinate: {latitude: 45.82, longitude: 16 }},
  {title:'e', coordinate: {latitude: 45.82, longitude: 15.8 }},
  {title:'3', coordinate: {latitude: 45.83, longitude: 15.9 }},
  {title:'4', coordinate: {latitude: 45.81, longitude: 15.77 }},
  {title:'5', coordinate: {latitude: 45.82, longitude: 15.85 }},
  {title:'6', coordinate: {latitude: 45.83, longitude: 15.9 }}
];


const AccountMap = (props) => {
  grabMarkers();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        More than {response.length} flew here <Image source={require('../../images/map/fire.png')} style={styles.image} />
      </Text>
      <MapView zoomEnabled={true} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} cacheEnabled={true}
        region={{ latitude: props.latitude, longitude: props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }}>
        {response.map(marker => (
        <MapView.Marker title={marker.title} coordinate={marker.coordinate} key={Math.random()} image={require('../../images/map/pin.png')}/>
        ))}
      </MapView>
    </View>
  );
};

export default AccountMap;