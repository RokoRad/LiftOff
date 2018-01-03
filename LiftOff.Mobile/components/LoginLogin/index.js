import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

const signUp = () => (
  console.log(loginData)
);

const loginData = {
  email: null,
  password: null
};

const LoginLogin = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Email" onChangeText={(e) => loginData.email = e}/>
      <LoginInput icon="Password" onChangeText={(e) => loginData.password = e} />
      <FacebookButton type="login" />
    </View>
    <TouchableWithoutFeedback onPress={() => signUp()}>
      <LoginButton type="signUp" />
    </TouchableWithoutFeedback>
  </View>
);

export default LoginLogin;