import React, { Component } from 'react';
import Kurac from './components/Kurac';
import { styles } from './styles.js';
import { Screen } from './components/Screen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Screen>ee</Screen>
      </View>
    );
  }
}

export default App;