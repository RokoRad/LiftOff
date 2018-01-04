import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

// landing view za login i registraciju
const Inital = (props) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Image source={require('../../images/splash.png')} style={styles.image}/>
    </View>
  </View>
);

export default Inital;