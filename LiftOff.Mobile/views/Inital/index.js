import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

// landing view za login i registraciju
const Inital = (props) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Image source={require('../../images/splash.png')} style={styles.image}/>
      <Text>aa</Text>
    </View>
  </View>
);

export default Inital;