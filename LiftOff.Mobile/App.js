import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import { Font } from "expo";
// import Login from './views/Login';
import Home from './views/Home';
// import Splash from './views/Splash';
import storage from './functions/storage';

class App extends React.Component {
  state = {
    loaded: false,
    logged: storage.get('logged')
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
    } else {
      return (
        <NativeRouter>
          <View style={[styles.statusBar, styles.fullScreen]}>
            {/* {
              this.state.logged
              ? <Home />
              : <Login />
            } */}
            <Route path="/" component={Home} />
            {console.log("index")}
          </View>
        </NativeRouter>
      );
    }
  }
}

export default App;