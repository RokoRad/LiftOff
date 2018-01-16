// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { Image, StyleSheet } from 'react-native';
// import styles from './styles.js';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 250,
    maxWidth: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  },
});

// kreiranje komponente sa pripadajucima parametrima
const InitialLogo = () => (
  <Image source={require('../../images/splash.png')} style={styles.image} />
)

export default InitialLogo;