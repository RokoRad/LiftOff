import React from 'react';
import { View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import inital from './styles.js';
import registration from './registration.js';
import Input from '../../components/Input';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
import Button from '../../components/Button';
import InitialBackground from '../../components/InitialBackground';

// privremena memroija regster podataka
const holder = {
  username: '',
  email: '',
  password: ''
};

// view koji sadrži logo, formu i botun za registraciju
export default ({ history }) => (
  <View style={inital.screen}>
    <InitialBackground />
    <View style={inital.container}>
      <InitialLogo />
      <View style={inital.wrapper}>
        <Input type="username" onChangeText={value => (holder.username = value)} />
        <Input type="email" onChangeText={value => (holder.email = value)} />
        <Input type="password" onChangeText={value => (holder.password = value)} />
        <KeyboardSpacer />
      </View>
      <InitialLink type="register" to="/" />
      <Button type="Register" onPress={() => registration(holder, history)} />
    </View>
  </View>
);
