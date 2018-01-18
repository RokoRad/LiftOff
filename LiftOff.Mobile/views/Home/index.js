import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub'),
      units = 'metric';

// const initial = (object, units) => {
// proxy.invoke('initiateConnection', object, units);
// };

// const update = (location) => {
// proxy.invoke('updateLocation', location);
// };

// const setup = () => {
// //setInterval(function(){ console.log("kurac") }, 500);
// connection.start().done(() => {
// console.log("usa")
// proxy.invoke('initiateConnection', {
// location: {
//   latitude: 43.508133,
//   longitude: 16.440193
// },
// time: new Date().toISOString()
// }, units);
// console.log("prosa")
// }).fail(() => {
// console.log("server error")
// // server error
// });
// };

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList,
      loaded: false
    }
  };

  // componentWillMount() {
  //   proxy.on('broadcastWeather', (response) => {
  //       //radi sta triba sa weatherRatingon
  //       console.log(response);
  //   });
  //   connection.stop();
  //   connection.start().done(() => {
  //   console.log("usa")
  //   proxy.invoke('initiateConnection', {
  //     location: {
  //       latitude: 43.508133,
  //       longitude: 16.440193
  //     },
  //     time: new Date().toISOString()
  //   }, units);
  //     console.log("prosa")
  //   }).fail(() => {
  //     console.log("server error")
  //   // server error
  //   });
  // }

  componentWillMount() {
    connection.stop();

    proxy.on('broadcastWeather', (response) => {
      console.log(response)
    });

    connection.start().done(() => {
      const timeLocation = {
        location: {
          latitude: 46,
          longitude: 5
        },
        time: new Date().toISOString()
      }
      proxy.invoke('initiateConnection', timeLocation, units);
    }).fail(() => {
      console.log("error")
      // puka server
    });

    // AsyncStorage.getItem('@timeLocation').then((value) => {
    //   proxy.on('broadcastWeather', (response) => {
    //     console.log(response);
    //     AsyncStorage.setItem('@realtime', JSON.stringify(response)).then();
    //     this.setState({
    //       list: response
    //     })
    //   }); 
    //   connection.start().done(() => {
    //     if(value !== null) {
    //       let parsed = JSON.parse(value);
    //       console.log(parsed)
    //       proxy.invoke('initiateConnection', {
    //         location: {
    //           latitude: parsed.location.latitude,
    //           longitude: parsed.location.longitude
    //         },
    //         time: new Date().toISOString()
    //       }, units);
    //     } else {
    //       console.log("value doesnt exist")
    //       proxy.invoke('initiateConnection', {
    //         location: {
    //           latitude: 43.55,
    //           longitude: 16.5
    //         },
    //         time: new Date().toISOString()
    //       }, units);
    //     }
    //   }).fail(() => {
    //     AsyncStorage.getItem('@realtime').then((cache) => {
    //       this.setState({
    //         list: JSON.parse(cache)
    //       });
    //     });
    //     Toast.show("Server error");
    //   });
    // });
  }

  render() {
    return(
      <Screen current={this.props.location}>
        <HomeRating string={this.state.list.AdvisoryRating} rating={this.state.list.TotalRating} />
        <HomeList list={this.state.list} />
      </Screen>
    );
  }
}

export default Home;