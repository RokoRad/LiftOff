import React from 'react';
import { View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import inital from './styles.js';
import registration from './registration.js';
import Input from '../../components/Input';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
import InitialButton from '../../components/InitialButton';

const holder = {
  username = '',
  email: '',
  password = ''
}

const Register = () => (
  <View style={inital.screen}>  
    <View style={inital.container}>
      <InitialLogo />
      <View style={inital.wrapper}>
        <Input type="username" onChangeText={holder.username} />
        <Input type="email" onChangeText={holder.email} />
        <Input type="password" onChangeText={holder.password} />
        <KeyboardSpacer />
      </View>
      <InitialLink type="login"  />
      <InitialButton type="login" onPress={() => registration(holder)} />
    </View>
  </View>
);

export default Register;