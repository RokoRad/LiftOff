import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import LoginForm from '../../components/LoginForm';

// landing view za login
const Inital = (props) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Image source={require('../../images/splash.png')} style={styles.image}/>
      <LoginForm />
    </View>
  </View>
);

export default Inital;