import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import globals from '../../config/styles.js';
import capitalize from '../../functions/capitalize';
import language from '../../languages'

const InitialButton = ({onPress, type}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8}>
    <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
      <Text style={globals.buttonInner}>{language[capitalize(type)]}</Text>
    </View>
  </TouchableOpacity>
);

export default InitialButton;