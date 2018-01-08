import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

// objekt sa ppisom ruta do ikona
const nav = {
  FlySafe: require('../../images/nav/drone-nav.png'),
  Planning: require('../../images/nav/map-nav.png'),
  LiftOff: require('../../images/nav/stopwatch-nav.png'),
  Account: require('../../images/nav/user-nav.png'),
  Settings: require('../../images/nav/settings-nav.png')
}

const navActive = {
  FlySafe: require('../../images/nav-active/drone-nav.png'),
  Planning: require('../../images/nav-active/map-nav.png'),
  LiftOff: require('../../images/nav-active/stopwatch-nav.png'),
  Account: require('../../images/nav-active/user-nav.png'),
  Settings: require('../../images/nav-active/settings-nav.png')
}

const NavigationItem = (props) => (
  <Link to={props.route} style={styles.navigationItemWrapper} component={TouchableOpacity} activeOpacity={1}>
    <View style={styles.navigationItem}>
      {/* ovisno o jednakosti trenutne rute sa linkom itema, pokazuje aktivnu ili obicnu klasu sa stilovima na komponenti */}
      <Image source={props.current.pathname === props.route ? navActive[props.type] : nav[props.type]} style={styles.navigationImage}/>
      <Text style={[(props.current.pathname === props.route ? styles.navigationTextActive : null), styles.navigationText]}>{language[props.type]}</Text>
    </View>
  </Link> 
);

export default NavigationItem;