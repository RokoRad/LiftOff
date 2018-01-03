import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

const registerData = {
  fullName: null,
  email: null,
  password: null
};

const signUp = () => (
  console.log(registerData)
);

const LoginRegistration = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Full name" onChangeText={(e) => registerData.fullName = e}/>
      <LoginInput icon="Email" onChangeText={(e) => registerData.email = e}/>
      <LoginInput icon="Password" onChangeText={(e) => registerData.password = e} />
      <FacebookButton type="registration" />
    </View>
    <TouchableWithoutFeedback onPress={() => (signUp())}>
      <LoginButton type="signUp" />
    </TouchableWithoutFeedback>
  </View>
);

export default LoginRegistration;