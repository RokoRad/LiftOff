import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import RegisterForm from '../../components/RegisterForm';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
import InitialButton from '../../components/InitialButton';

const registration = (data) => {
  console.log(data)
}

const Register = () => {
  <View style={inital.screen}>  
    <View style={inital.container}>
      <InitialLogo />
      {/* register form */}
      <InitialLink type="login"  />
      <InitialButton type="login" onPress={() => registration("a")} />
    </View>
  </View>
}

export default Register;