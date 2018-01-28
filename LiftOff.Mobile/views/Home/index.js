import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import HomeIndicator from '../../components/HomeIndicator';
import { connect } from 'react-redux';
import { _start, _stop } from './_realtime.js';
import styles from './styles.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    _start(this.props.timeLocation, 'metric');
    console.log("prop", this.props.timeLocation)
  }

  componentWillUnmount() {
    _stop();
  }

  render() {
    return (
      <Screen current={this.props.location}>
        <HomeRating string={this.props.home.AdvisoryRating} rating={this.props.home.TotalRating} />
        <HomeIndicator time={this.props.timeLocation.time}/>
        <HomeList list={this.props.home} />
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  ...state.timeLocationReducer,
  ...state.homeReducer
});

export default connect(mapStateToProps)(Home);