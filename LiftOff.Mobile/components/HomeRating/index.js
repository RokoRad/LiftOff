import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const HomeRating = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.top}>
      {/* image */}
    </View>
    <View style={styles.bottom}>
      <View style={styles.left}>
        <Text style={styles.title}></Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.rating}></Text>
      </View>
    </View>
  </View>
);

export default HomeRating;