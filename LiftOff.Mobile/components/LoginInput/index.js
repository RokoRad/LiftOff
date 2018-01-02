import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import styles from './styles.js';

const LoginInput = (props) => (
    <View style={styles.loginInputWrapper}>
      {
        props.icon === 'email' 
        ? <Image source={require('../../images/email-icon.svg')} style={styles.loginInputEmailIcon} resizeMode="contain"/>
        : <Image source={require('../../images/password-icon.png')} style={styles.loginInputPasswordIcon}/>
      }
      <TextInput placeholder={props.placeholder} style={styles.loginInput}/>
    </View>
);

export default LoginInput;