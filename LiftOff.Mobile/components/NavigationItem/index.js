import React from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native';
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

// komponenta za navItem koji dijeli rutu
const ActiveNavItem = (props) => {
  return (
    <Link to={props.route} style={styles.navigationItemWrapper} >
      <TouchableHighlight style={styles.navigationItemActive}>
        <View>
          <Image source={icons[props.type]} style={styles.navigationImage}/>
          <Text style={styles.navigationText}>{language[props.type]}</Text>
        </View>
      </TouchableHighlight>
    </Link> 
  );
};

// komponenta za navItem koje ne odgvoara ruti
const InactiveNavItem = (props) => {
  console.log("kurac")
  return (
    <Link to={props.route} style={styles.navigationItemWrapper} >
      <TouchableHighlight style={styles.navigationItem}>
        <View>
          <Image source={icons[props.type]} style={styles.navigationImage}/>
          <Text style={styles.navigationText}>{language[props.type]}</Text>
        </View>
      </TouchableHighlight>
    </Link> 
  )
};

// export i prikaz ovisno o trenutnoj ruti
const NavigationItem = (props) => {
  if(props.current.pathname === props.route) {
    return <ActiveNavItem {...props} />;
  } else {
    return <InactiveNavItem {...props} />;
  }
}

export default NavigationItem;