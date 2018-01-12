import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Tooltip = ({displayed}) => {
  if(props.displayed) {
    return (
      <View style={styles.tooltip}>
        <Text style={styles.text}>Choose when</Text>
      </View>  
    );
  } else {
    return (null);
  }
};

export default Tooltip;