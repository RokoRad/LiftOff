import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';

// import lang from 'react-native-i18n';
// // za enn-US i en-GB postavlja en kao default
// lang.fallbacks = true;
// // // instnciranje lokalizacije
// lang.translations = {
//   en: {
//     moreThan: "More than",
//     flewHere: "flew here",
//     userName: "Username",
//     email: "Email",
//     favoriteFlightSpot: "Favorite flying spot",
//     favoriteFlightTime: "Average flight time",
//     totalFlights: "Total flights",
//     totalFlySafeScore: "Average FlySafe Score",
//     totalTimeFlown: "Total time flown"
//   },
//   hr: {
//     moreThan: "Više od",
//     flewHere: "je letjelo ovdije",
//     email: "Email",
//     favoriteFlightSpot: "Najčešće mjesto letenja",
//     favoriteFlightTime: "Prosječno trajanje leta",
//     totalFlights: "Ukupno letova",
//     totalFlySafeScore: "Prosječna FlySafe ocijena",
//     totalTimeFlown: "Ukupno vrijeme letenja"
//   }
// }
const lang = {
  t: function(value) {
    return value;
  }
}

// instaciranje komponente
class Account extends Component {
  // postavljanje defaultnih vrijednosti
  constructor() {
    super();
    this.state = {
      userObject: {
        email: '/',
        favoriteFlightSpot: '/',
        favoriteFlightTime: '/',
        totalFlights: '/',
        totalFlySafeScore: '/',
        totalTimeFlown: '/',
        userName: '/'
      }
    }
  };

  // poziv prilikom renderiranja komponente
  componentWillMount() {
    // povlačenje vrijednosti iz cachea
    AsyncStorage.getItem('@stats').then((value) => {
      this.state = {
        userObject: JSON.parse(value)
      };
    });

    // dohvaćanje tokena i postavljanje vrijednosti dobivene sa servera
    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + value
        }
      }).then((response) => {
        // provjera povratnog statusa servera
        if(response.status === 200) {
          // updateanje vrijednosti i cachranje
          this.setState({
            userObject: JSON.parse(response._bodyInit)
          });
          AsyncStorage.setItem('@stats', (response._bodyInit));
        } else if (response.status === 401) {
          // za invalidan token, povratak na login
          this.props.history.push('/');
        }
      })
    })
  }
  
  // funckija renderiranja te sadržaj komponente
  render() {
    return (
      <Screen current={this.props.location}>
        <AccountMap moreThan={lang.t('moreThan')} flewHere={lang.t('flewHere')} />
        <View style={styles.container}>
          <AccountItem title={lang.t('userName')} content={this.state.userObject.userName} />
          <AccountItem title={lang.t('email')} content={this.state.userObject.email} />
          <AccountItem title={lang.t('favoriteFlightSpot')} content={this.state.userObject.favoriteFlightSpot} />
          <AccountItem title={lang.t('favoriteFlightTime')} content={this.state.userObject.favoriteFlightTime} />
          <AccountItem title={lang.t('totalFlights')} content={this.state.userObject.totalFlights} />
          <AccountItem title={lang.t('totalFlySafeScore')} content={this.state.userObject.totalFlySafeScore} />
          <AccountItem title={lang.t('totalTimeFlown')} content={this.state.userObject.totalTimeFlown} />
        </View>
      </Screen>
    );
  }
}

export default Account;