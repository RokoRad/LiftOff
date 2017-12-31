import React from 'react';
import { View } from 'react-native';
import { NavigationItem } from '../NavigationItem';
import { styles } from './styles.js';
//import { language } from '../../config/settings.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem icon="" text="" />
    </View>
);

export default Navigation;