import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';
import removeToken from '../../functions/removeToken';
import language from '../../languages';
import { connect } from 'react-redux';

// instaciranje komponente
class Account extends Component {
  // postavljanje defaultnih vrijednosti
  constructor(props) {
    super(props);
  };

  // poziv prilikom renderiranja komponente
  // componentWillMount() {
  //   // povlačenje vrijednosti iz cachea
  //   // dohvaćanje tokena i postavljanje vrijednosti dobivene sa servera
  //   AsyncStorage.getItem('@token').then((value) => {
  //     fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': 'Bearer ' + value
  //       }
  //     }).then((response) => {
  //       // provjera povratnog statusa servera
  //       if(response.status === 200) {
  //         // updateanje vrijednosti i cachranje
  //         this.setState({
  //           userObject: JSON.parse(response._bodyInit)
  //         });
  //         AsyncStorage.setItem('@stats', (response._bodyInit));
  //       } else if (response.status === 401) {
  //         // za invalidan token, povratak na login
  //         removeToken();
  //         this.props.history.push('/');
  //       }
  //     })
  //   })
  // }
  
  // funckija renderiranja te sadržaj komponente
  render() {
    return (
      <Screen current={this.props.location}>
        <AccountMap moreThan={language.moreThan} flewHere={language.flewHere} />
        <View style={styles.container}>
          <AccountItem title={language.userName} content={this.props.userName} />
          <AccountItem title={language.email} content={this.props.email} />
          <AccountItem title={language.favoriteFlightSpot} content={this.props.favoriteFlightSpot} />
          <AccountItem title={language.favoriteFlightTime} content={this.props.favoriteFlightTime} />
          <AccountItem title={language.totalFlights} content={this.props.totalFlights} />
          <AccountItem title={language.totalFlySafeScore} content={this.props.totalFlySafeScore} />
          <AccountItem title={language.totalTimeFlown} content={this.props.totalTimeFlown} />
        </View>
      </Screen>
    );
  }
}


const mapStateToProps = state => ({
  ...state.profileReducer
});

export default connect(mapStateToProps)(Account);