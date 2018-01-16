import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Expo from "expo";
import Inital from './views/Inital';
import Register from './views/Register';
import Home from './views/Home';
import Account from './views/Account';
import Map from './views/Map';
import Stopwatch from './views/Stopwatch';
import Settings from './views/Settings';

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
      'barlowMedium': require('./fonts/Barlow-Medium.ttf'),
      'barlowRegular': require('./fonts/Barlow-Regular.ttf'),
      'barlowSemiBold': require('./fonts/Barlow-SemiBold.ttf')
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
            {/* <Route exact strict path="/" component={Inital} />
            <Route exact strict path="/register" component={Register} /> */}
            <Route exact strict path="/login" component={Inital} />
            <Route exact strict path="/" component={Register} />
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