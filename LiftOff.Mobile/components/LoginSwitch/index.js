import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';
import storage from '../../functions/storage';
import { Link, Route } from 'react-router-native';
import Login from '../../views/Login';
import Registration from '../../views/Register';


const LoginSwitch = (props) => (
  <View style={styles.loginSwitchContainer}>
    <Link to="/login" style={props.route === 'login' ? styles.loginSwitchWrapperActive : styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signIn}</Text>
    </Link>
    <Link to="/registration" style={props.route === 'registration' ? styles.loginSwitchWrapperActive : styles.loginSwitchWrapper}>
      <Text style={styles.loginSwitchItem}>{language.signUp}</Text>
    </Link>
  </View>
);

export default LoginSwitch;

// const App = () => (
//   <div>
//     <nav>
//       <Link to="/dashboard">Dashboard</Link>
//     </nav>
//     <div>
//       <Route path="/dashboard" component={Dashboard}/>
//     </div>
//   </div>
// )