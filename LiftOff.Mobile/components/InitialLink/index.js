// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';

// kreiranje komponente sa pripadajucima parametrima
const InitalLink = ({onPress, type, to}) => (
  <Link component={TouchableOpacity} activeOpacity={1} to={to}>
    <View style={styles.wrapper}>
      <Text style={styles.message}>
        {type} is <Text style={styles.messageBold}>is bold</Text>
      </Text>
    </View>
  </Link>
)

export default InitalLink;