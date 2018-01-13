import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
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
        <AccountMap latitude={45.80} longitude={15.95} />
        <View style={styles.container}>
          <AccountItem title="Username" content={this.state.userObject.userName} />
          <AccountItem title="Email" content={this.state.userObject.email} />
          <AccountItem title="Favorite flying spot" content={this.state.userObject.favoriteFlightSpot} />
          <AccountItem title="Average flight spot" content={this.state.userObject.favoriteFlightTime} />
          <AccountItem title="Total flights" content={this.state.userObject.totalFlights} />
          <AccountItem title="Average FlySafe score" content={this.state.userObject.totalFlySafeScore} />
          <AccountItem title="Total time flown" content={this.state.userObject.totalTimeFlown} />
        </View>
      </Screen>
    );
  }
}

export default Account;