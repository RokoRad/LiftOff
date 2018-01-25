import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import globals from '../../config/styles.js';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

const InitialButton = ({onPress, type}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8}>
    <View style={[globals.buttonWrapper, { backgroundColor: '#d41287' }]}>
      <Text style={globals.buttonInner}>login</Text>
    </View>
  </TouchableOpacity>
);

export default InitialButton;

//{language[uppercase(type)]}