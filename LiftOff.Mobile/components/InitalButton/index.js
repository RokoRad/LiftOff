import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router'
import styles from './styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const InitalButton = (props) => {
  const login = () => {
    console.log("login:")
    console.log(values);
    props.router.push("/home");
  };
  
  const register = () => {
    console.log("register:");
    console.log(values);
    props.router.push("/home");
  };

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={styles.wrapper}>
        <Text style={styles.inner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;