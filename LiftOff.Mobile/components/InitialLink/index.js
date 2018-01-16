// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles.js';

// kreiranje komponente sa pripadajucima parametrima
const InitalLink = ({onPress, type}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.message}>
        {type} is <Text style={styles.messageBold}>is bold</Text>
      </Text>
    </View>
  </TouchableWithoutFeedback>
)

export default InitalLink;