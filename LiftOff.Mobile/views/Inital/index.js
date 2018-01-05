import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import InitalButton from '../../components/InitalButton';
import { language } from '../../config/settings.js'

class Inital extends Component {
  constructor() {
     super();
     this.state = {
        login: true
     };
  };

  changeView = () => {
     this.setState({
       login: !this.state.login 
    });
  };

  render() {
      return (
          <View style={styles.screen}>
            <View style={styles.container}>
              <Image source={require('../../images/splash.png')} style={styles.image}/>
              {this.state.login === true
              ? <LoginForm />
              : <RegisterForm />
              }
              <TouchableWithoutFeedback onPress={this.changeView}>
                <View style={styles.messageWrapper}>
                  <Text style={styles.message}>
                    {(this.state.login === true) ? language.registerAccount : language.haveAccount} <Text style={styles.messageBold}>{(this.state.login === true) ? language.register : language.login}</Text>
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <InitalButton type={(this.state.login === true) ? 'login' : 'register'} action={(this.state.login === true) ? 'login()' : 'register()'} />
            </View>
          </View>    
      );
  }
}

export default Inital;