import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles.js';
// import Navigation from './components/Navigation';
// import Login from './views/Login';
import { NativeRouter } from 'react-router-native';
import { Font } from "expo";
import LoginButton from './components/LoginButton'

class App extends React.Component {
  state = {
    loaded: false
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      /* 700 */ 'barlowBold': require('./fonts/Barlow-Bold.ttf'),
      /* 800 */ 'barlowExtraBold': require('./fonts/Barlow-ExtraBold.ttf'),
      /* 300 */ 'barlowLight': require('./fonts/Barlow-Light.ttf'),
      /* 500 */ 'barlowMedium': require('./fonts/Barlow-Medium.ttf'),
      /* 400 */ 'barlowRegular': require('./fonts/Barlow-Regular.ttf'),
      /* 600 */ 'barlowSemiBold': require('./fonts/Barlow-SemiBold.ttf')
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
            <LoginButton />
          </View>
        </NativeRouter>
      );
    }
  }
}

export default App;