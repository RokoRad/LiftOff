import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js'

const LoginButton = (props) => (
  <View style={styles.loginButtonWrapper}>
    <Text style={styles.loginButton}>
      {
        props.type === 'signIn'
        ? language.signIn
        : language.signUp
      }
    </Text>
  </View>
);

export default LoginButton;