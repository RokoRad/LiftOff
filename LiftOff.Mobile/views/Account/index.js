import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';

class Account extends Component {
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

  componentWillMount() {
    AsyncStorage.getItem('@stats').then((value) => {
      this.state = {
        userObject: JSON.parse(value)
      };
    });

    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + value
        }
      }).then((response) => {
        if(response.status === 200) {
          this.setState({
            userObject: JSON.parse(response._bodyInit)
          });
          AsyncStorage.setItem('@stats', (response._bodyInit));
        } else if (response.status === 401) {
          this.props.history.push('/');
        }
      })
    })
  }
  
  render() {
    return (
      <Screen current={this.props.location}>
        <AccountMap />
        <View style={styles.container}>
          <AccountItem title="username" content={this.state.userObject.userName} />
          <AccountItem title="email" content={this.state.userObject.email} />
          <AccountItem title="favoriteFlyingSpot" content={this.state.userObject.favoriteFlightSpot} />
          <AccountItem title="averageFlightSpot" content={this.state.userObject.favoriteFlightTime} />
          <AccountItem title="totalFlights" content={this.state.userObject.totalFlights} />
          <AccountItem title="averageFlySafeScore" content={this.state.userObject.totalFlySafeScore} />
          <AccountItem title="totalTimeFlown" content={this.state.userObject.totalTimeFlown} />
        </View>
      </Screen>
    );
  }
}

export default Account;