import React, { Component } from 'react';
import globals from '../../config/styles.js';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import colorGenerator from '../../functions/colorGenerator';
import round from '../../functions/round';
import Toast from 'react-native-simple-toast';
import styles from './styles.js';
import { language } from '../../config/settings.js';

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
      Toast.show(language.logToast);
      // šalje request
    }
  };

  render() {
      return (
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.active}>
            <View style={[styles.left, (this.state.active ? styles.active : null), globals.bothAligned]}>
              <Text style={styles.inner}>
                {this.state.active ? '+' : '-'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.middle}>
            <Text style={styles.middleInner} numberOfLines={1} ellipsizeMode="tail">{this.props.location}</Text>
          </View>
          <View style={styles.middleRight}>
            <Text style={styles.middleRightInner}>{this.props.time}</Text>
          </View>
          <View style={styles.right}>
            <Text style={[styles.rightInner, styles[colorGenerator(this.props.rating)]]}>{round(this.props.rating)}</Text>
          </View>
        </View>
      );
  }
}

export default StopwatchLog;