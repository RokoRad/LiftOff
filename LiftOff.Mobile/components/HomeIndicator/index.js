import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import language from '../../languages';
import _getTime from './_getTime.js';
import _restore from './_restore.js';

export default ({ time }) => (
  <View style={styles.wrapper}>
    <Text style={styles.left}>{language.Indicator}</Text>
    <View style={styles.right}>
      <TouchableOpacity onPress={() => _restore()}>
        {_getTime(time) === _getTime(new Date().toISOString()) ? (
          <Text style={styles.rightText}>{language.Now}</Text>
        ) : (
          <View style={styles.inner}>
            <Text style={styles.rightText}>{_getTime(time)}</Text>
            <Image
              source={require('../../images/restore.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  </View>
);
