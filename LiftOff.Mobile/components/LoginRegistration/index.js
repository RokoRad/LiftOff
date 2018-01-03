import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import LoginInput from '../LoginInput';
import FacebookButton from '../FacebookButton';
import LoginButton from '../LoginButton';

// kreiranje objekta sa podatcima
const registerData = {
  fullName: null,
  email: null,
  password: null
};

// funkcija za slanje objekta
const signUp = () => (
  console.log(registerData)
);

// sučelje komponente
const LoginRegistration = () => (
  <View>
    <View style={styles.inputWrapper}>
      <LoginInput icon="Full name" onChangeText={(e) => registerData.fullName = e}/>
      <LoginInput icon="Email" onChangeText={(e) => registerData.email = e}/>
      <LoginInput icon="Password" onChangeText={(e) => registerData.password = e} />
      <FacebookButton type="registration" />
    </View>
    <LoginButton type="signUp" onPress={() => (signUp())}/>
  </View>
);

export default LoginRegistration;