import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const InitalButton = (props) => {
  const login = () => {
    
    props.router.push("/home");
  };
  
  const register = () => {
    props.router.push("/home");
  };

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, {backgroundColor: '#3f6ea7'}]}>
        <Text style={globals.buttonInner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;