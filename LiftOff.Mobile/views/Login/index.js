import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import inital from './styles.js';
import login from './login.js';
import Input from '../../components/Input';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
// import InitialButton from '../../components/InitialButton';
import Button from '../../components/Button';

const holder = {
  username: '',
  password: ''
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    AsyncStorage.getItem('@token').then((response) => {
      if(response !== null) {
        this.props.history.push('/home');
      }
    })
  }

  render() {
    return (
      <View style={inital.screen}>  
        <View style={inital.container}>
          <InitialLogo />
          <View style={inital.wrapper}>
            <Input type="username" onChangeText={(value) => holder.username = value} />
            <Input type="password" onChangeText={(value) => holder.password = value} />
            <KeyboardSpacer />
          </View>
          <InitialLink type="login" to="/register" />
          <Button type="Login" onPress={() => login(holder, this.props.history)} />
        </View>
      </View>
    );
  }
}