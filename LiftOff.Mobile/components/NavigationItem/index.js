import React from 'react';
import { Text, Image, View } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

// objekt sa ppisom ruta do ikona
const icons = {
  Home: require('../../images/drone-nav.png'),
  Map: require('../../images/map-nav.png'),
  LiftOff: require('../../images/stopwatch-nav.png'),
  Account: require('../../images/user-nav.png'),
  Settings: require('../../images/settings-nav.png')
}

const NavigationItem = (props) => (
  <Link to={props.route} style={props.current.pathname === props.route ? styles.navigationItemWrapperActive : styles.navigationItemWrapper}>
    {/* ovisno o jednakosti trenutne rute sa linkom itema, pokazuje aktivnu ili obicnu klasu sa stilovima na komponenti */}
    <View style={styles.navigationItem}>
      <Image source={icons[props.type]} style={styles.navigationImage}/>
      <Text style={styles.navigationText}>{language[props.type]}</Text>
    </View>
  </Link> 
);

export default NavigationItem;