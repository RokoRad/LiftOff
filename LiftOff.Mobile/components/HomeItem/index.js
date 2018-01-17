import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import colorGenerator from '../../functions/colorGenerator';
import capitalize from '../../functions/capitalize';
import isValueText from '../../functions/isValueText';

const icons = {
  atmosphere: require('../../images/weather/atmosphere.png'),
  conditions: require('../../images/weather/conditions.png'),
  temperature: require('../../images/weather/temperature.png'),
  uv: require('../../images/weather/uv.png'),
  visibility: require('../../images/weather/visibility.png'),
  wind: require('../../images/weather/wind.png')
}

// metric i imperial

const HomeItem = (props) => (
  <View style={styles.wrapper}>
    <View style={[styles.left, globals.bothAligned]}>
      <Image source={icons[props.type]} style={styles.icon}/>
    </View>
    <View style={styles.middle}>
      <View>
        <Text style={styles.title}>{capitalize(props.type)}</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{props.fName}</Text>
          <Text style={styles.rightText}>{isValueText(props.fVal)}{props.fAddon}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{props.sName}</Text>
          <Text style={styles.rightText}>{isValueText(props.sVal)}{props.sAddon}</Text>
        </View>
      </View>
    </View>
    <View style={[styles.right, globals.bothAligned]}>
      <Text style={[styles.rating, (props.rating !== null ? styles[colorGenerator(props.rating)] : null)]}>
        {isValueText(props.rating)}
      </Text>
    </View>
  </View>
);

export default HomeItem;