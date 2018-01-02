import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import styles from './styles.js';

const LoginInput = (props) => (
    <View style={styles.loginInputWrapper}>
      {
        props.icon === 'Email' 
        ? <Image source={require('../../images/email-icon.png')} style={styles.loginInputEmailIcon} resizeMode="contain"/>
        : <Image source={require('../../images/password-icon.png')} style={styles.loginInputPasswordIcon}/>
      }
      <TextInput placeholder={props.icon} style={styles.loginInput} placeholderTextColor="#737373" />
    </View>
);

export default LoginInput;