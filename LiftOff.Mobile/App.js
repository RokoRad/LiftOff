import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles.js';
// import Navigation from './components/Navigation';
import Login from './views/Login';
import { NativeRouter } from 'react-router-native';

class App extends React.Component {
  render() {
    return (
      <NativeRouter style={[styles.statusBar, styles.fullScreen]}>
        <View style={[styles.statusBar, styles.fullScreen]}>
          {
            // storage logged, else Login
          }
          <Login />
        </View>
      </NativeRouter>
    );
  }
}

export default App;