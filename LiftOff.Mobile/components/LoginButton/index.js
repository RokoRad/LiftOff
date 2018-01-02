import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const LoginButton = () => (
  <View style={styles.loginButtonWrapper}>
    <Text style={styles.loginButton}>
      Sign In
    </Text>
  </View>
);

export default LoginButton;