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
      markers: null
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
    console.log(markers)
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          More than 10 flew here <Image source={require('../../images/map/fire.png')} style={styles.image} />
        </Text>
        <MapView zoomEnabled={true} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} cacheEnabled={true}
          region={{ latitude: this.props.latitude, longitude: this.props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }}>
          {this.state.markers.map(marker => (
            <MapView.Marker coordinate={marker.coordinate.flightLocation} key={marker.id} image={require('../../images/map/pin.png')}/>
          ))}
        </MapView>
      </View>
    )
  }

}


export default AccountMap;