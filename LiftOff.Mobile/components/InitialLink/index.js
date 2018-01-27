// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import ToRegister from './ToRegister.js';
import ToLogin from './ToLogin.js';
import styles from './styles.js';

// kreiranje komponente sa pripadajucima parametrima
export default ({onPress, type, to}) => (
  <Link component={TouchableOpacity} activeOpacity={1} to={to}>
    <View style={styles.wrapper}>
      <Text style={styles.message}>
        {type === 'login'
        ? <ToRegister />
        : <ToLogin />
        }
      </Text>
    </View>
  </Link>
);