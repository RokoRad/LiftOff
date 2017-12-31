import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles.js';
import { Screen } from './components/Screen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Screen></Screen>
      </View>
    );
  }
}

export default App;