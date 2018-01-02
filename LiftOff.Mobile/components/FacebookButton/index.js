import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

const FacebookButton = () => (
  <View style={styles.facebookButtonWrapper}>
    <Text style={styles.facebookButton}>
      {language.facebook}
    </Text>
  </View>
);

export default FacebookButton;