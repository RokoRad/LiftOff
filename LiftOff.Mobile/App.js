import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Text>:tuki:</Text>
      </View>
    );
  }
}

export default App;