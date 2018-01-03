import React from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';

const NavigationItem = (props) => (
  <Link to="/" style={syles.navigationItemWrapper}>
    <TouchableHighlight style={styles.navigationItem}>
      <View>
        <Image source={require('../../images/user-icon.png')} style={styles.navigationImage}/>
        <Text style={styles.navigationText}>aa</Text>
      </View>
    </TouchableHighlight>
  </Link>
);

export default NavigationItem;