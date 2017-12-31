import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js';
//import { language } from '../../config/settings.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <Text style={styles.navigationItem}>a</Text>
      <Text style={styles.navigationItem}>b</Text>
      <Text style={styles.navigationItem}>c</Text>
      <Text style={styles.navigationItem}>d</Text>
    </View>
);

export default Navigation;