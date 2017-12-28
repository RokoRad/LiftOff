import React, { Component } from 'react';
import { View } from 'react-native';
import Kurac from './components/Kurac';
import { styles } from './styles.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Kurac name="ddebil"/>
      </View>
    );
  }
}

export default App;