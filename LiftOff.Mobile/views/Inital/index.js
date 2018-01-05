import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import InitalButton from '../../components/InitalButton';

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
              : <RegisterLogin />
              }
              <InitalButton type="login" action="login()" />
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