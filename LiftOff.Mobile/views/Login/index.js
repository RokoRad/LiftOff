import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import LoginRegistration from '../../components/LoginRegistration';
import LoginLogin from '../../components/LoginLogin';
import FacebookButton from '../../components/FacebookButton';
import storage from '../../functions/storage';
import { language } from '../../config/settings.js';

class Login extends React.Component {
  state = {
    panel: 'login'
  };

  render() {
      return (
        <View style={styles.loginWrapper}>
          <LoginHolder />
          <View style={styles.loginBody}>
            <LoginSwitch panel={this.state.panel} />
            { this.state.panel === 'login'
              ? <LoginRegistration />
              : <LoginLogin />
            }
            <KeyboardSpacer />
          </View>
        </View>
      );
    }
};

export default Login;