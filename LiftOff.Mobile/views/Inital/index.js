import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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

  changeState = () => {
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
              <View style={styles.messageWrapper}>
                <Text style={styles.message}>
                  {language.haveAccount} <Text style={styles.messageBold}>{language.login}</Text> 
                  {/* registerAccount register */}
                </Text>
              </View>
              <InitalButton type={(this.state.login === true) ? 'login' : 'register'} action={(this.state.login === true) ? 'login()' : 'register()'} />

              <TouchableOpacity onPress={this.changeState}>
                <View>
                  <Text>
                    testtest
                  </Text>
                </View>
              </TouchableOpacity>



            </View>
          </View>    
      );
  }
}

// landing view za login
// const Inital = (props) => (
//   <View style={styles.screen}>
//     <View style={styles.container}>
//       <Image source={require('../../images/splash.png')} style={styles.image}/>
//       <LoginForm />
//     </View>
//   </View>
// );

export default Inital;