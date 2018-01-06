import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js'

const HomeRating = (props) => {




  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        {/* image */}
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.title}>
            {language.ratingTitle}
          </Text>
          <Text style={styles.text}>
            {props.string}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rating}>
            {props.rating}
          </Text>
        </View>
      </View>
    </View>
  )
};

export default HomeRating;