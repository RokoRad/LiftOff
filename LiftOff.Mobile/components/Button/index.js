import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles.js';
import _loading from './_loading.js';
import _default from './_default.js';

export default ({onPress, type, loading}) => (
  <TouchableOpacity onPress={onPress} opacity={0.8} style={styles.outer}>
    <View style={styles.buttonWrapper}>
    {(loading)
    ? _loading()
    : _default(type)
    };
    </View>
  </TouchableOpacity>
);