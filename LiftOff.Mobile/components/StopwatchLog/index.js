import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, CheckBox } from 'react-native';
import colorGenerator from '../../functions/colorGenerator';
import round from '../../functions/round';
import globals from '../../config/styles.js';
import styles from './styles.js';
import _saveLog from './_saveLog.js';

export default ({ rating, location, time, id, saved }) => (
  <View style={styles.wrapper}>
    <View style={[styles.left, styles.bothAligned]}>
      <CheckBox onValueChange={() => _saveLog(id)} style={styles.checkbox} value={saved} />
    </View>
    <View style={styles.middle}>
      <Text style={styles.middleInner} numberOfLines={1} ellipsizeMode="tail">
        {location}
      </Text>
    </View>
    <View style={styles.middleRight}>
      <Text style={[styles.middleRightInner, globals[colorGenerator(rating)]]}>
        {round(rating)}
      </Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.rightInner}>{time}</Text>
    </View>
  </View>
);
