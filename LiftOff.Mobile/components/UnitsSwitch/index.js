import React, { Component } from 'react';
import Switch from '../Switch';
import vars from '../../config/vars.js';
import { View, Text } from 'react-native';
import styles from './styles.js';
import language from '../../languages';
import _onChange from './_onChange.js';
import store from '../../store';
import { connect } from 'react-redux';

class UnitsChange extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //switch za promjenu jedinica
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{language.changeUnits}</Text>
        <Switch
          value={this.props.units === 'imperial' ? false : true}
          onValueChange={val => _onChange(val)}
          activeText={'km'}
          inActiveText={'mil'}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settingsReducer
});

export default connect(mapStateToProps)(UnitsChange);
