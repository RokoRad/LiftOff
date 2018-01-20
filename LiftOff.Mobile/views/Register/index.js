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
  username: null,
  email: null,
  password: null
}

const Register = ({history}) => (
  <View style={inital.screen}>  
    <View style={inital.container}>
      <InitialLogo />
      <View style={inital.wrapper}>
        <Input type="username" onChangeText={(value) => holder.username = value} />
        <Input type="email" onChangeText={(value) => holder.email = value} />
        <Input type="password" onChangeText={(value) => holder.password = value} />
        <KeyboardSpacer />
      </View>
      <InitialLink type="login" to="/" />
      <InitialButton type="register" onPress={() => registration(holder, history)} />
    </View>
  </View>
);

export default Register;