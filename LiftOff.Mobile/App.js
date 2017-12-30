import React, { Component } from 'react';
import { View } from 'react-native';
import Kurac from './components/Kurac';
import { styles } from './styles.js';
import { storage } from './functions/storage.js'
class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Kurac name="d-debil" />
      </View>
    );
  }
}

export default App;