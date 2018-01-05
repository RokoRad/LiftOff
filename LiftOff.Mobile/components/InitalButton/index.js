import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const InitalButton = (props) => {
  const login = () => {
    console.log(values)
  };
  
  const register = () => {
    console.log(values);
  };

  return (
    <TouchableOpacity onPress={() => login()} opacity={0.8}>
      <View style={styles.wrapper}>
        <Text style={styles.inner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;