import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js'

const HomeRating = (props) => {

  //0-2 crveno, 2-4 zuto(narancasto) , 4-5 zeleno
  generateColor = (rating) => {
    if(rating < 4) {
      if(rating < 2) {
        return 'red';
      } else {
        return 'yellow';
      }
    } else {
      return 'green';
    }
  };
  return (
    <View style={[styles.wrapper, styles[generateColor(props.rating)]]}>
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