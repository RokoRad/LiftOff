import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import language from '../../languages';
import _getTime from './_getTime.js';
import _restore from './_restore.js';

export default ({time}) => (
  <TouchableOpacity onPress={() => _restore()}>
    <View style={styles.wrapper}>
      <Text style={styles.left}>{language.Indicator}</Text>
      <Text style={styles.right}>
        {_getTime(time)}
        <Image source={require('../../images/restore.png')} style={styles.image}/>
      </Text>
    </View>
  </TouchableOpacity>
);