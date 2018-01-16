import React from 'react';
import { View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import inital from './styles.js';
import Input from '../../components/Input';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
import InitialButton from '../../components/InitialButton';

const registration = (data) => {
  console.log(data)
}

const Register = () => (
  <View style={inital.screen}>  
    <View style={inital.container}>
      <InitialLogo />
      <View style={inital.wrapper}>
        <Input type="username" />
        <Input type="password" />
        <KeyboardSpacer />
      </View>
      <InitialLink type="login"  />
      <InitialButton type="login" onPress={() => registration("a")} />
    </View>
  </View>
);

export default Register;