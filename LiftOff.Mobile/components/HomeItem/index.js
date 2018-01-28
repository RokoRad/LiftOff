import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';
import colorGenerator from '../../functions/colorGenerator';
import capitalize from '../../functions/capitalize';
import isValueText from '../../functions/isValueText';
import language from '../../languages';
import globals from '../../config/styles.js';

const icons = {
  atmosphere: require('../../images/weather/atmosphere.png'),
  conditions: require('../../images/weather/conditions.png'),
  temperature: require('../../images/weather/temperature.png'),
  uv: require('../../images/weather/uv.png'),
  visibility: require('../../images/weather/visibility.png'),
  wind: require('../../images/weather/wind.png')
};

// metric i imperial

export default ({ type, fVal, sVal, fName, sName, fAddon, sAddon, rating }) => (
  <View style={styles.wrapper}>
    <View style={[styles.left, styles.bothAligned]}>
      <Image source={icons[type]} style={styles.icon} />
    </View>
    <View style={styles.middle}>
      <View>
        <Text style={styles.title}>{language[capitalize(type)]}</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{language[fName]}</Text>
          <Text style={styles.rightText}>
            {isValueText(fVal)}
            {fAddon}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{language[sName]}</Text>
          <Text style={styles.rightText}>
            {isValueText(sVal)}
            {sAddon}
          </Text>
        </View>
      </View>
    </View>
    <View style={[styles.right, styles.bothAligned]}>
      <Text style={[styles.rating, rating !== null ? globals[colorGenerator(rating)] : null]}>
        {isValueText(rating)}
      </Text>
    </View>
  </View>
);
