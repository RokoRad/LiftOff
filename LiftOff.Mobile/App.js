import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Screen from './components/Screen';
import { NativeRouter } from 'react-router-native';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.statusBar}>
          <Text>kuracc</Text>
          <Screen>eeee</Screen>
        </View>
      </NativeRouter>
    );
  }
}

export default App;