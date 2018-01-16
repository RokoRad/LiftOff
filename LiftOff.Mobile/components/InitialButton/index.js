import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router';
import globals from '../../config/styles.js';
import capitalize from '../../functions/capitalize';

const InitialButton = ({onPress, type}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8}>
    <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
      <Text style={globals.buttonInner}>{capitalize(type)}</Text>
    </View>
  </TouchableOpacity>
);

export default InitialButton;