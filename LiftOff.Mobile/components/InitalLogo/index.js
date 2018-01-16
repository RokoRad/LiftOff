// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { Image } from 'react-native';
import styles from './styles.js';

// kreiranje komponente sa pripadajucima parametrima
const InitalLogo = () => (
  <Image source={require('../../images/splash.png')} style={styles.image} />
)

export default InitalLogo;