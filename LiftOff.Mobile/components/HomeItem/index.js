import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';
import colorGenerator from '../../functions/colorGenerator';

const HomeItem = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.left}>
      <Image source={require('../../images/nav/drone-nav.png')} style={styles.icon}/>
    </View>
    <View style={styles.middle}>
      <View style={styles.top}>
        <Text style={styles.title}>Wind</Text>
      </View>
      <View style={styles.bottom}>
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
    <View style={styles.right}>
      <Text style={[styles.rating, styles[colorGenerator(props.rating)]]}>{props.rating}</Text>
    </View>
  </View>
);

export default HomeItem;