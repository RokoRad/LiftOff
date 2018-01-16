import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import inital from './styles.js';
import login from './login.js';
import Input from '../../components/Input';
import InitialLogo from '../../components/InitialLogo';
import InitialLink from '../../components/InitialLink';
import InitialButton from '../../components/InitialButton';

const holder = {
  username: null,
  password: null
}

class Login extends React.Component {
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
          <InitialLink type="login"  />
          <InitialButton type="login" onPress={() => login(holder)} />
        </View>
      </View>
    );
  }
}

export default Login;