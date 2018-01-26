import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Screen from '../../components/Screen';
import AccountMap from '../../components/AccountMap';
import styles from './styles.js';
import language from '../../languages';
import { connect } from 'react-redux';
import _list from './_list.js';

// instaciranje komponente
class Account extends Component {
  // postavljanje defaultnih vrijednosti
  constructor(props) {
    super(props);
  };

  // funckija renderiranja te sadržaj komponente
  render() {
    console.log(this.props.stats)
    return (
      <Screen current={this.props.location}>
        <AccountMap markers={this.props.markers} location={this.props.timeLocation.location} moreThan={language.moreThan} flewHere={language.flewHere} />
        <ScrollView style={styles.container}>
          {_list(this.props.stats)}
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  ...state.profileReducer,
  ...state.timeLocation
});

export default connect(mapStateToProps)(Account);