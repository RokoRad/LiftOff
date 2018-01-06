import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';

const HomeItem = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.left}>
      {/* image */}
    </View>
    <View style={styles.middle}>
      <View style={styles.top}>
        <Text style={styles.title}></Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Text style={styles.leftText}></Text>
          <Text style={styles.rightText}></Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}></Text>
          <Text style={styles.rightText}></Text>
        </View>
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.rating}></Text>
    </View>
  </View>
);

export default HomeItem;