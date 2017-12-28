import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Text>Ova aplikacija pokazuje :tuki:</Text>
      </View>
    );
  }
}