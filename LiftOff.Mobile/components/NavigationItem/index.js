import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import language from '../../languages';
// import { language } from '../../config/settings.js';

// objekt sa ppisom ruta do ikona
const nav = {
  FlySafe: require('../../images/nav/drone-nav.png'),
  Planning: require('../../images/nav/map-nav.png'),
  LiftOff: require('../../images/nav/stopwatch-nav.png'),
  Profile: require('../../images/nav/user-nav.png'),
  Settings: require('../../images/nav/settings-nav.png')
}

const navActive = {
  FlySafe: require('../../images/nav-active/drone-nav.png'),
  Planning: require('../../images/nav-active/map-nav.png'),
  LiftOff: require('../../images/nav-active/stopwatch-nav.png'),
  Profile: require('../../images/nav-active/user-nav.png'),
  Settings: require('../../images/nav-active/settings-nav.png')
}

export default ({current, route, type}) => {
  const isActive = current.pathname === route;

  return (
    <Link to={route} style={styles.navigationItemWrapper} component={TouchableOpacity} activeOpacity={1}>
      <View style={styles.navigationItem}>
        <Image source={isActive ? navActive[type] : nav[type]} style={styles.navigationImage}/>
        <Text style={[styles.navigationText, (isActive ? styles.navigationTextActive : null)]}>{language[type]}</Text>
      </View>
    </Link> 
  )
};