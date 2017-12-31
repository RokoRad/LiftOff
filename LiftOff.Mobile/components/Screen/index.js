import React from 'react';
import { View } from 'react-native';
import { styles } from './styles.js';
import { Navigation } from '../Navigation';

const Screen = (props) => (
    <View {...props}>
      <Navigation />
    </View>
);

export default Screen;