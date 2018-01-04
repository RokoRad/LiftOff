import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

// props type o tipu primitka

const fbClick = (type) => (
  console.log("fbClick: " + type)
);

const FacebookButton = (props) => (
  <TouchableWithoutFeedback onPress={() => (fbClick(props.type))}>
    <View style={styles.facebookButtonWrapper}>
      <Text style={styles.facebookButton}>
        {language.facebook}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

export default FacebookButton;