import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import RegisterForm from '../../components/RegisterForm';
import InitalLogo from '../../components/InitalLogo';
import InitalLink from '../../components/InitalLink';
import InitalButton from '../../components/InitalButton';

const registration = (data) => {
  console.log(data)
}

const Register = () => {
  <View style={inital.screen}>  
    <View style={inital.container}>
      <InitalLogo />
      {/* register form */}
      <InitalLink type="login"  />
      <InitalButton type="login" onPress={() => registration("a")} />
    </View>
  </View>
}

export default Register;