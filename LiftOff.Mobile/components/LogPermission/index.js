import React, { Component } from 'react';
import Expo from 'expo';
import { View, Text, CheckBox } from 'react-native';
import Button from '../../components/Button';
import styles from './styles.js';
import language from '../../languages';
import _onChange from './_onChange.js';
import { connect } from 'react-redux';

class LogPermission extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // prikazuje se checkbox za promjenu permissije svaenja podataka
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{language.Permission}</Text>
        <CheckBox value={this.props.allow} onValueChange={() => _onChange(this.props.history)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settingsReducer
});

export default connect(mapStateToProps)(LogPermission);
