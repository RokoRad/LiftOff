import React, { Component } from 'react';
import globals from '../../config/styles.js';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-simple-toast';
import styles from './styles.js';

class StopwatchLog extends Component {
  constructor(props) {
     super(props);
     this.state = {
        active: this.props.active
     };
  };

  active = () => {
    if(this.state.active) {
      return;
    } else {
      this.setState({
        active: !this.state.active
      });
      Toast.show('Saved log.');
      // šalje request
    }
  };

  render() {
      return (
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.active}>
            <View style={[styles.left, (this.state.active ? styles.active : null), globals.bothAligned]}>
              <Text style={styles.inner}>
                {this.state.active ? '✓' : '+'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.middle}>
            <Text style={styles.middleInner} numberOfLines={1} ellipsizeMode="tail">Split, Croatia</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.rightInner}>12:22</Text>
          </View>
        </View>
      );
  }
}

export default StopwatchLog;