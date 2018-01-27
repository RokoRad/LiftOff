import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';
import StopwatchLog from '../StopwatchLog';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

export default ({data, hidden}) => (
  <View style={[styles.wrapper, (hidden === 0) ? styles.hidden : null]}>
    <View style={styles.head}>
      <Text style={styles.left}>{uppercase(language.Log)}</Text>
      <Text style={styles.middleLeft}>{uppercase(language.Location)}</Text>
      <Text style={styles.middleRight}>{uppercase(language.Score)}</Text>
      <Text style={styles.right}>{uppercase(language.Time)}</Text>
    </View>
    <ScrollView style={styles.scroll}>
      {data.map((value) => <StopwatchLog location={value.location} time={value.time} active={value.active} key={value.id} rating={value.rating} />)}
    </ScrollView>
  </View>
);