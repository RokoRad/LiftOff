import React from 'react';
import { View, Text } from 'react-native';
import LoginInput from '../../components/LoginInput'
import styles from './styles.js';

const Login = () => (
    <View>
      <LoginInput icon="Email" placeholder="kurac" />
      <LoginInput icon="Password" placeholder="kurac" />
    </View>
);

export default Login;