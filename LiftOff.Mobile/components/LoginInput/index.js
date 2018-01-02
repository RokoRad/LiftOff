import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles.js';

const LoginInput = (props) => (
    <View style={styles.loginInputWrapper}>
      <TextInput placeholder={props.placeholder} style={styles.loginInput}/>
    </View>
);

export default LoginInput;