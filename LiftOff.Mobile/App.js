import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Navigation from './components/Navigation';
import { NativeRouter } from 'react-router-native';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={[styles.statusBar, styles.fullScreen]}>
          <Navigation />
        </View>
      </NativeRouter>
    );
  }
}

export default App;