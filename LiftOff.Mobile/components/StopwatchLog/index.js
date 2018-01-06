import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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
    }
  };

  render() {
      return (
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.active}>
            <View style={[(this.props.active ? styles.active : null), styles.left]}>
              <Text>
                {
                  this.state.active ? '+' : '-'
                }
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