import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import RegisterForm from '../../components/RegisterForm';

// landing view za registraciju
const Register = (props) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Image source={require('../../images/splash.png')} style={styles.image}/>
      <RegisterForm />
    </View>
  </View>
);

export default Register;