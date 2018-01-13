import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';

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
        <AccountMap />
        <View style={styles.container}>
          <AccountItem title="userName" content={this.state.userObject.userName} />
          <AccountItem title="email" content={this.state.userObject.email} />
          <AccountItem title="favoriteFlyingSpot" content={this.state.userObject.favoriteFlightSpot} />
          <AccountItem title="averageFlightTime" content={this.state.userObject.favoriteFlightTime} />
          <AccountItem title="totalFlights" content={this.state.userObject.totalFlights} />
          <AccountItem title="averageFlySafeScore" content={this.state.userObject.totalFlySafeScore} />
          <AccountItem title="totalTimeFlown" content={this.state.userObject.totalTimeFlown} />
        </View>
      </Screen>
    );
  }
}

export default Account;