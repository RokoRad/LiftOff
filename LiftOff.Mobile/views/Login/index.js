import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LoginHolder from '../../components/LoginHolder';
import LoginSwitch from '../../components/LoginSwitch';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import FacebookButton from '../../components/FacebookButton';
import storage from '../../functions/storage';
import { language } from '../../config/settings.js';

function getPanel() {
  if(storage.get('loginPanel')) {
    if(storage.get('loginPanel') === 'login') {
      return 'login';
    } else {
      return 'registration';
    }
  } else {
    storage.set('loginPanel', 'login');
    return 'login';
  }
  console.log(storage.get('loginPanel'))
}

class Login extends React.Component {

  state = {
    panel: getPanel()
  };

  render() {
      return (
        <View style={styles.loginWrapper}>
          <LoginHolder />
          <View style={styles.loginBody}>
            <LoginSwitch panel={this.state.panel} />
            { this.state.panel === 'login'
              ? <View>
                  <View style={styles.inputWrapper}>
                    <LoginInput icon="Email"/>
                    <LoginInput icon="Password" />
                    <Text style={styles.forgotPassword}>{language.forgotPassword}</Text>
                    <FacebookButton />
                  </View>
                  <LoginButton type="signIn" />
                </View>
              : <View>
                  <View style={styles.inputWrapper}>
                    <LoginInput icon="Email"/>
                    <LoginInput icon="Email"/>
                    <LoginInput icon="Password" />
                    <FacebookButton />
                  </View>
                  <LoginButton type="signUp" />
                </View>
            }
            <KeyboardSpacer />
          </View>
        </View>
      );
    }
};

export default Login;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import styles from './styles.js';
// // import Navigation from './components/Navigation';
// // import Login from './views/Login';
// import { NativeRouter } from 'react-router-native';
// import { Font } from "expo";
// import Login from './views/Login';
// import Home from './views/Home';
// import Splash from './views/Splash';
// import storage from './functions/storage';

// class App extends React.Component {
//   state = {
//     loaded: false,
//     logged: storage.get('logged')
//   }

//   componentWillMount() {
//     this.loadFonts();
//   }

//   async loadFonts() {
//     await Expo.Font.loadAsync({
//       /* 700 */ 'barlowBold': require('./fonts/Barlow-Bold.ttf'),
//       /* 800 */ 'barlowExtraBold': require('./fonts/Barlow-ExtraBold.ttf'),
//       /* 300 */ 'barlowLight': require('./fonts/Barlow-Light.ttf'),
//       /* 500 */ 'barlowMedium': require('./fonts/Barlow-Medium.ttf'),
//       /* 400 */ 'barlowRegular': require('./fonts/Barlow-Regular.ttf'),
//       /* 600 */ 'barlowSemiBold': require('./fonts/Barlow-SemiBold.ttf')
//     });
//     this.setState({loaded: true});
//   };

//   render() {
//     if(!this.state.loaded) {
//       return null;
//     } else {
//       return (
//         <NativeRouter style={[styles.statusBar, styles.fullScreen]}>
//           <View style={[styles.statusBar, styles.fullScreen]}>
//             {
//               this.state.logged
//               ? <Home />
//               : <Login />
//             }
//           </View>
//         </NativeRouter>
//       );
//     }
//   }
// }

// export default App;