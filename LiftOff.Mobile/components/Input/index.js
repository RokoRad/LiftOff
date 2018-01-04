import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

const Input = (props) => (
    <View style={styles.loginInputWrapper}>
      {
        props.icon === 'Email' 
        ? <Image source={require('../../images/email-icon.png')} style={styles.loginInputEmailIcon}/>
        : props.icon === 'Password' 
          ? <Image source={require('../../images/password-icon.png')} style={styles.loginInputPasswordIcon}/>
          : <Image source={require('../../images/user-icon.png')} style={styles.loginInputEmailIcon}/>
      }
      <TextInput placeholder={props.icon} style={styles.loginInput} placeholderTextColor="#737373" {...props}/>
    </View>
);

export default Input;