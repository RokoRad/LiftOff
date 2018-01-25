import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles.js';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

export default ({onPress, type}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8} style={styles.outer}>
    <View style={styles.buttonWrapper}>
      <Text style={styles.buttonInner}>{uppercase(language[type])}</Text>
    </View>
  </TouchableOpacity>
);