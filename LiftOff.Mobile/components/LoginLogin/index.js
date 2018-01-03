import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';
import { language } from '../../config/settings.js';

const loginData = {
  email: null,
  password: null
};

const signIn = () => (
  console.log(loginData)
);

const forgotPassword = () => (
  console.log("forgotPassword")
);

const LoginLogin = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Email" onChangeText={(e) => loginData.email = e}/>
      <LoginInput icon="Password" onChangeText={(e) => loginData.password = e} />
      <TouchableWithoutFeedback onPress={() => (forgotPassword())}>
        <View>
          <Text style={styles.forgotPassword}>{language.forgotPassword}</Text>
        </View>
      </TouchableWithoutFeedback>
      <FacebookButton type="login" />
    </View>
    <TouchableWithoutFeedback onPress={() => signIn()}>
      <LoginButton type="signIn" />
    </TouchableWithoutFeedback>
  </View>
);

export default LoginLogin;