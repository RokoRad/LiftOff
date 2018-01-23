import React, { Component } from 'react';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import { connect } from 'react-redux';
import { _start, _stop } from './_realtime.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    _start(this.props.timeLocation, 'metric')
  }

  componentWillUnmount() {
    _stop();
  }

  render() {
    return(
      <Screen current={this.props.location}>
        <HomeRating string={this.props.home.AdvisoryRating} rating={this.props.home.TotalRating} />
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