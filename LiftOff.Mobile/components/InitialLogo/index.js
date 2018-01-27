// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { Image } from 'react-native';
import styles from './styles.js';

// kreiranje komponente sa pripadajucima parametrima
export default () => (
  <Image source={require('../../images/logotip.png')} style={styles.image} />
)