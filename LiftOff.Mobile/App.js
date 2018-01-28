import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Expo from 'expo';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';
import Map from './views/Map';
import Stopwatch from './views/Stopwatch';
import Settings from './views/Settings';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      robotoLight: require('./fonts/Roboto-Light.ttf'),
      robotoRegular: require('./fonts/Roboto-Regular.ttf'),
      robotoMedium: require('./fonts/Roboto-Medium.ttf'),
      robotoBold: require('./fonts/Roboto-Bold.ttf')
    });
    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return <Expo.AppLoading />;
    } else {
      return (
        <NativeRouter>
          <Provider store={store}>
            <View style={styles.fullScreen}>
              <StatusBar hidden={true} />
              <Route exact strict path="/" component={Login} />
              <Route exact strict path="/register" component={Register} />
              <Route exact strict path="/home" component={Home} />
              <Route exact strict path="/profile" component={Profile} />
              <Route exact strict path="/map" component={Map} />
              <Route exact strict path="/liftoff" component={Stopwatch} />
              <Route exact strict path="/settings" component={Settings} />
            </View>
          </Provider>
        </NativeRouter>
      );
    }
  }
}
