import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Letter from 'react-native-letter-spacing';
import styles from './styles.js';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

export default ({onPress, type}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8} style={styles.outer}>
    <View style={styles.buttonWrapper}>
      <Letter letterSpacing={20} style={styles.buttonInner}>{uppercase(language[type])}</Letter>
    </View>
  </TouchableOpacity>
);