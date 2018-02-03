import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';

export default () => (
  <View style={styles.image}>
    <Image source={require('../../images/wallpaper.png')}/>
  </View>
);
