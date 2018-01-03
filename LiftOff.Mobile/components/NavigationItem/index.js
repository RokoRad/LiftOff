import React from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import { language } from '../../config/settings.js';

const ActiveNavItem = (props) => (
  <Link to={props.route} style={styles.navigationItemWrapper} >
    <TouchableHighlight style={styles.navigationItemActive}>
      <View>
        <Image source={require('../../images/user-nav.png')} style={styles.navigationImage}/>
        <Text style={styles.navigationText}>kurac</Text>
      </View>
    </TouchableHighlight>
  </Link> 
);

const InactiveNavItem = (props) => (
  <Link to={props.route} style={styles.navigationItemWrapper} >
    <TouchableHighlight style={styles.navigationItem}>
      <View>
        <Image source={require('../../images/user-nav.png')} style={styles.navigationImage}/>
        <Text style={styles.navigationText}>Account</Text>
      </View>
    </TouchableHighlight>
  </Link> 
);

const NavigationItem = (props) => {
  console.log(props.current.pathname);
  console.log(props.route);
  if(props.current.pathname === props.route) {
    return <ActiveNavItem {...props} />;
  } else {
    return <InactiveNavItem {...props} />;
  }
}

export default NavigationItem;