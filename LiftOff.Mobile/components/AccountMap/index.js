import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import lang from 'react-native-i18n';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import style from '../../functions/mapStyle';
import styles from './styles.js';

lang.fallbacks = true;

// instnciranje lokalizacije
lang.translations = {
  en: {
    moreThan: "More than",
    flewhere: "flew here"
  },
  hr: {
    moreThan: "Više od",
    flewhere: "je letjelo ovdije"
  }
}

// instanciranje kompinente
class AccountMap extends React.Component {
  // postavljanje defaultne vrijednosti, koja je u ovom slučaju Split
  constructor() {
    super();
    this.state = {
      markers: [
        {
          flightLocation: {
            latitude: 43.508133,
            longitude: 16.440193
          },
          id: 0
        }
      ]
    }
  }

  // prilikom kreiranja komponente poziva funkciju za dohvaćanje markera
  componentWillMount() {
    this.grabMarkers();
  }

  // funckija za dohvaćanje markera  
  grabMarkers = () => {
    // postavljanje vijrednosti poziva ovisno o lokaciji
    const holder = {
      location: {
        latitude: 43.508133,
        longitude: 16.440193
      },
      time: new Date()
    };

    // dohvaćanje cacha te njegovo prikazivanje
    AsyncStorage.getItem('@hot').then((value) => {
      if(JSON.parse(value).length !== 0) {
        this.setState({
          markers: JSON.parse(value)
        })
      }
    });

    // dohvaćanje podataka sa servera
    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/flights/getFlightsNearMe', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + value,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(holder)
      }).then((response) => {
        if(response.status === 200) {
          // postavljanje novog cacha te ažuiriranje podatka
          AsyncStorage.setItem('@hot', response._bodyInit);
          this.setState({
            markers: JSON.parse(response._bodyInit)
          });
        } else if (response.status === 401) {
          this.props.history.push('/');
        }
      });
    })
  };

  // renderiranje komponente te mapiranje markera na mapu
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          {lang.t('moreThan')} {this.state.markers.length} {lang.t('flewHere')} <Image source={require('../../images/map/fire.png')} style={styles.image} />
        </Text>
        <MapView zoomEnabled={true} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} cacheEnabled={true}
          region={{ ...this.state.markers[0].flightLocation, latitudeDelta: 0.1, longitudeDelta: 0.05 }}>
          {[this.state.markers].map((marker, index) => (
            <MapView.Marker coordinate={{ ...marker[index].flightLocation }} key={marker[index].id} image={require('../../images/map/pin.png')}/>
          ))}
        </MapView>
      </View>
    )
  }
}

export default AccountMap;