import React from 'react';
import { Image } from 'react-native';
import styles from './styles.js';

// pozadinska slika na login/registraciji
export default () => (
  <Image source={require('../../images/wallpaper.png')} resizeMode="cover" style={styles.image} />
);
