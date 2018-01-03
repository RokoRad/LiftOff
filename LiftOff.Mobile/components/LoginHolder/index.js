import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';

const LoginHolder = (props) => (
  <View style={styles.loginHolder}>
    {props.type === 'login'
    ? <Image source={require('../../images/loginHolder.png')} style={styles.loginHolderImageLogin}/>
    : <Image source={require('../../images/loginHolder.png')} style={styles.loginHolderImageRegister}/>
    }
  </View>

);

export default LoginHolder;