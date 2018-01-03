import React from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

// komponenta za navItem koji dijeli rutu
const ActiveNavItem = (props) => {
  return (
    <Link to={props.route} style={styles.navigationItemWrapper} >
      <TouchableHighlight style={styles.navigationItemActive}>
        <View>
          <Image source={require('../../images/user-nav.png')} style={styles.navigationImage}/>
          <Text style={styles.navigationText}>{language[props.type]}</Text>
        </View>
      </TouchableHighlight>
    </Link> 
  );
};

// komponenta za navItem koje ne odgvoara ruti
const InactiveNavItem = (props) => {
  return (
    <Link to={props.route} style={styles.navigationItemWrapper} >
      <TouchableHighlight style={styles.navigationItem}>
        <View>
          <Image source={require('../../images/user-nav.png')} style={styles.navigationImage}/>
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