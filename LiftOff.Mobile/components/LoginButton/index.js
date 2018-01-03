import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js'

const LoginButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.loginButtonWrapper}>
        <Text style={styles.loginButton}>
          {
            props.type === 'signIn'
            ? language.signIn
            : language.signUp
          }
        </Text>
      </View>
  </TouchableOpacity>
);

export default LoginButton;