import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import AccountItem from '../../components/AccountItem';
import AccountMap from '../../components/AccountMap';
import Dropdown from '../../components/Dropdown';
import styles from './styles.js';

// "_bodyInit": "{\"id\":\"14114859-8b49-4bf9-bd9a-78969cb085ea\",\"userName\":null,\"totalTimeFlown\":828,\"totalFlights\":12,\"totalFlySafeScore\":26.399999999999995,\"favoriteFlightTime\":\"Afternoon\",\"favoriteFlightSpot\":\"Split\",\"showWhereIFly\":true}",

// const userObject = AsyncStorage.getItem('@token').then((value) => {
//   fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + value,
//       'Content-type': 'application/json'
//     }
//   }).then((response) => console.log(response._bodyInit));
// });

/*
22:40:10: Object {
22:40:10:   "userObject": Object {
22:40:10:     "email": "jebimater@gmail.com",
22:40:10:     "favoriteFlightSpot": "",
22:40:10:     "favoriteFlightTime": "",
22:40:10:     "id": "79c6dec6-5712-4731-9f85-d64acd17d162",
22:40:10:     "showWhereIFly": true,
22:40:10:     "totalFlights": 0,
22:40:10:     "totalFlySafeScore": 0,
22:40:10:     "totalTimeFlown": 0,
22:40:10:     "userName": "jebimater",
22:40:10:   },
22:40:10: }

*/

class Account extends Component {
  constructor() {
    super();
    this.state = {
      userObject: {
        email: '/',
        favoriteFlightSpot: '/',
        favoriteFlightTime: '/',
        totalFlights: '/',
        totalFlySafeScore: '/',
        totalTimeFlown: '/',
        userName: '/'
      }
    }
  };

  componentWillMount() {
    AsyncStorage.getItem('@stats').then((value) => {
      this.state = {
        userObject: value
      };
    });

    AsyncStorage.getItem('@token').then((value) => {
      fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + value
        }
      }).then((response) => {
        this.setState({
          userObject: JSON.parse(response._bodyInit)
        });
        AsyncStorage.setItem('@stats', JSON.parse(response._bodyInit));
      })
    })
  }
  
  render() {
    return (
      <Screen current={this.props.location}>
        <AccountMap latitude={45.80} longitude={15.95} />
        <View style={styles.container}>
          <AccountItem title="Username" content={this.state.userObject.userName} />
          <AccountItem title="Email" content={this.state.userObject.email} />
          <Dropdown />
          <ScrollView style={styles.scrollview}>
            <AccountItem title="Favorite flying spot" ccontent={this.state.userObject.favoriteFlightSpot} />
            <AccountItem title="Average flight spot" ccontent={this.state.userObject.favoriteFlightTime} />
            <AccountItem title="Total flights" ccontent={this.state.userObject.totalFlights} />
            <AccountItem title="Average FlySafe score" ccontent={this.state.userObject.totalFlySafeScore} />
            <AccountItem title="Total time flown" ccontent={this.state.userObject.totalTimeFlown} />
          </ScrollView>
        </View>
      </Screen>
    );
  }
}

// const Account = ({location}) => (
//   <Screen current={location}>
//     <AccountMap latitude={45.80} longitude={15.95} />
//     <View style={styles.container}>
//       <AccountItem title="Username" content={userObject.username}/>
//       <AccountItem title="Email" content="dbaric@dump.hr"/>
//       <Dropdown />
//       <ScrollView style={styles.scrollview}>
//         <AccountItem title="Total flights" content="18"/>
//         <AccountItem title="Total flights" content="18"/>
//         <AccountItem title="Total flights" content="18"/>
//         <AccountItem title="Total flights" content="18"/>
//         <AccountItem title="Total flights" content="18"/>
//         <AccountItem title="Total flights" content="18"/>
//       </ScrollView>
//     </View>
//   </Screen>
// );

export default Account;