import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import * as Animatable from 'react-native-animatable';
import animationGenerator from '../../functions/animationGenerator';
import style from '../../functions/mapStyle';
import styles from './styles.js';
// api/flights/getFlightsNearMe

class AccountMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          flightLocation: {
            latitude: 43,
            longitude: 16
          },
          id: 0
        },
      ]
    }
  }

  componentWillMount() {
    this.grabMarkers();
  }

  grabMarkers = () => {
    const holder = {
      location: {
        latitude: 43.508133,
        longitude: 16.440193
      },
      time: new Date()
    };

    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/flights/getFlightsNearMe', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + value,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(holder)
      }).then((response) => {
        this.setState({
          markers: response._bodyInit
        });;
        console.log(JSON.parse(response._bodyInit))
      });
    })
    console.log(this.state.markers)
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          More than 10 flew here <Image source={require('../../images/map/fire.png')} style={styles.image} />
        </Text>
        <MapView zoomEnabled={true} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} cacheEnabled={true}
          region={{ latitude: this.props.latitude, longitude: this.props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }}>
          {[this.state.markers].map(marker => (
            <MapView.Marker coordinate={marker.flightLocation} key={marker.id} image={require('../../images/map/pin.png')}/>
          ))}
        </MapView>
      </View>
    )
  }
}

// 11:07:34:   Object {
//   11:07:34:     "drone": null,
//   11:07:34:     "flightLocation": Object {
//   11:07:34:       "flightLocationId": 1,
//   11:07:34:       "flightSpot": "Split",
//   11:07:34:       "latitude": 43.508133,
//   11:07:34:       "longitude": 16.440193,
//   11:07:34:     },
//   11:07:34:     "flightTime": Object {
//   11:07:34:       "flightStartTime": "2018-01-10T21:01:08.447",
//   11:07:34:       "flightTimeId": 1,
//   11:07:34:     },
//   11:07:34:     "flySafeScore": 2.2,
//   11:07:34:     "id": 1,
//   11:07:34:     "timeFlown": 69,
//   11:07:34:   },
//   11:07:34:   Object {
//   11:07:34:     "drone": null,
//   11:07:34:     "flightLocation": Object {
//   11:07:34:       "flightLocationId": 2,
//   11:07:34:       "flightSpot": "Split",
//   11:07:34:       "latitude": 43.508133,
//   11:07:34:       "longitude": 16.440193,
//   11:07:34:     },
//   11:07:34:     "flightTime": Object {
//   11:07:34:       "flightStartTime": "2018-01-11T22:14:25.637",
//   11:07:34:       "flightTimeId": 2,
//   11:07:34:     },
//   11:07:34:     "flySafeScore": 2.2,
//   11:07:34:     "id": 2,
//   11:07:34:     "timeFlown": 69,
//   11:07:34:   },
//   11:07:34: ]
  


export default AccountMap;