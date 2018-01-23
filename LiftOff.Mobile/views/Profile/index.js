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

  // funckija renderiranja te sadržaj komponente
  render() {
    console.log(this.props.stats)
    const nest = [...this.props.stats]
    return (
      <Screen current={this.props.location}>
        <AccountMap moreThan={language.moreThan} flewHere={language.flewHere} />
        <View style={styles.container}>
          {nest.map((value) => {
            console.log("a")
            //<AccountItem title={language[value]} content={value}/>
          })}
          {/* <AccountItem title={language.userName} content={this.props.stats.userName} />
          <AccountItem title={language.email} content={this.props.stats.email} />
          <AccountItem title={language.favoriteFlightSpot} content={this.props.stats.favoriteFlightSpot} />
          <AccountItem title={language.favoriteFlightTime} content={this.props.stats.favoriteFlightTime} />
          <AccountItem title={language.totalFlights} content={this.props.stats.totalFlights} />
          <AccountItem title={language.totalFlySafeScore} content={this.props.stats.totalFlySafeScore} />
          <AccountItem title={language.totalTimeFlown} content={this.props.stats.totalTimeFlown} /> */}
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  ...state.profileReducer
});

export default connect(mapStateToProps)(Account);