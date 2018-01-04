import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Expo from "expo";
import Inital from './views/Inital';
import Home from './views/Home';
import Account from './views/Account';
import Map from './views/Map';
import Stopwatch from './views/Stopwatch';
import Settings from './views/Settings';
import storage from './functions/storage';

class App extends React.Component {
  state = {
    loaded: false
    //,logged: storage.get('logged')
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      /* 700 */ 'barlowBold': require('./fonts/Barlow-Bold.ttf'),
      /* 800 */ 'barlowExtraBold': require('./fonts/Barlow-ExtraBold.ttf'),
      // /* 300 */ 'barlowLight': require('./fonts/Barlow-Light.ttf'),
      /* 500 */ 'barlowMedium': require('./fonts/Barlow-Medium.ttf'),
      /* 400 */ 'barlowRegular': require('./fonts/Barlow-Regular.ttf'),
      /* 600 */ 'barlowSemiBold': require('./fonts/Barlow-SemiBold.ttf')
    });
    this.setState({loaded: true});
  };

  render() {
    if(!this.state.loaded) {
      return  <Expo.AppLoading />;
    } else {
      return (
        <NativeRouter>
          <View style={styles.fullScreen}>
            <StatusBar hidden={true} />
            <Route exact strict path="/" component={Inital} />
            <Route exact strict path="/register" component={Register} />
            <Route exact strict path="/home" component={Home} />
            <Route exact strict path="/account" component={Account} />
            <Route exact strict path="/map" component={Map} />
            <Route exact strict path="/liftoff" component={Stopwatch} />
            <Route exact strict path="/settings" component={Settings} />
          </View>
        </NativeRouter>
      );
    }
  }
}

export default App;