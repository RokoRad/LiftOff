import React from 'react';
import { View, Text, Image } from 'react-native';
import Anime from 'react-native-anime';
import styles from './styles.js';
import { language } from '../../config/settings.js'
import colorGenerator from '../../functions/colorGenerator';

const HomeRating = (props) => {
  function animate() {
    this.image
        .skewX(5, { spring: true })
        .skewY(5, { spring: true })
        .wait()
        .rotate(360*20, { duration: 2000 })
        .start()
  }
  render(
    <View style={[styles.wrapper, styles[colorGenerator(props.rating)]]}>
      <View style={styles.top}>
        <Anime.Image source={require('../../images/drone.png')} style={styles.drone} ref={ ref => this.image = ref }/>
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
  );
};

export default HomeRating;