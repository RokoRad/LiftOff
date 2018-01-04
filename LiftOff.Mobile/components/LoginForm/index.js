import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import InitalButton from '../InitalButton';
import { language } from '../../config/settings.js'

// kreiranje viewa
const LoginForm = () => (
  <View style={styles.wrapper}>
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.message}>
          {language.registerAccount} 
          
          <Text style={styles.messageBold}>
            {language.register}
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
    <InitalButton text="login" action="login()"/>
  </View>
);

export default LoginForm;