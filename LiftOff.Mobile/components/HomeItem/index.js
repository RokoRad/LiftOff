import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import colorGenerator from '../../functions/colorGenerator';

const icons = {
  humidity: require('../../images/weather/humidity.png'),
  rain: require('../../images/weather/rain.png'),
  temperature: require('../../images/weather/temperature.png'),
  uv: require('../../images/weather/uv.png'),
  visibility: require('../../images/weather/visibility.png'),
  wind: require('../../images/weather/wind.png')
}

const round = (value) => (Math.round(value * 10) / 10);

const HomeItem = (props) => (
  <View style={styles.wrapper}>
    <View style={[styles.left, globals.bothAligned]}>
      <Image source={icons[props.type]} style={styles.icon}/>
    </View>
    <View style={styles.middle}>
      <View>
        <Text style={styles.title}>Wind</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.leftText}>Speed</Text>
          <Text style={styles.rightText}>10 km/h</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>Direction</Text>
          <Text style={styles.rightText}>East</Text>
        </View>
      </View>
    </View>
    <View style={[styles.right, globals.bothAligned]}>
      <Text style={[styles.rating, styles[colorGenerator(props.rating)]]}>{round(props.rating)}</Text>
    </View>
  </View>
);

export default HomeItem;