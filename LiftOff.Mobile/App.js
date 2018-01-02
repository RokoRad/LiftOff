import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles.js';
// import Navigation from './components/Navigation';
import Login from './views/Login';
import { NativeRouter } from 'react-router-native';
import { Font } from "expo";

class App extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      'barlowBold': require('./fonts/Barlow-Bold.ttf'),
      'barlowExtraBold': require('./fonts/Barlow-ExtraBold.ttf'),
      'barlowLight': require('./fonts/Barlow-Light.ttf'),
      'barlowMedium': require('./fonts/Barlow-Medium.ttf'),
      'barlowRegular': require('./fonts/Barlow-Regular.ttf'),
      'barlowSemiBold': require('./fonts/Barlow-SemiBold.ttf')
    });
    this.setState({loaded: true});
  };

  render() {
    if(!this.state.loaded) {
      return null;
      // splash
    } else {
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
}

export default App;