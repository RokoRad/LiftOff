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
10:44:15:   "email": "testacc@gmail.com",
10:44:15:   "favoriteFlightSpot": "Split",
10:44:15:   "favoriteFlightTime": "Night",
10:44:15:   "id": "1adca848-0d6c-4658-8f2e-98e58a2bfa85",
10:44:15:   "showWhereIFly": true,
10:44:15:   "totalFlights": 1,
10:44:15:   "totalFlySafeScore": 2.2,
10:44:15:   "totalTimeFlown": 69,
10:44:15:   "userName": "testacc",


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
    // AsyncStorage.getItem('@token').then((value) => {
    //   fetch('http://liftoffapi.azurewebsites.net/api/account/getUserData', {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': 'Bearer ' + value
    //     }
    //   }).then((response) => {
    //     if(response.status === 200) {
    //       this.setState({
    //         userObject: JSON.parse(response._bodyInit)
    //       });
    //       console.log(JSON.parse(response._bodyInit))
    //       AsyncStorage.setItem('@stats', JSON.parse(response._bodyInit));
    //     } else if (response.status === 401) {
    //       this.props.history.push('/');
    //     }
    //   })
    // })
  }
  
  render() {
    return (
      <Screen current={this.props.location}>
        <AccountMap latitude={45.80} longitude={15.95} />
        <View style={styles.container}>
          <AccountItem title="Username" content={this.state.userObject.userName} />
          <AccountItem title="Email" content={this.state.userObject.email} />
          {/* <Dropdown />
          <ScrollView style={styles.scrollview}> */}
            <AccountItem title="Favorite flying spot" ccontent={this.state.userObject.favoriteFlightSpot} />
            <AccountItem title="Average flight spot" ccontent={this.state.userObject.favoriteFlightTime} />
            <AccountItem title="Total flights" ccontent={this.state.userObject.totalFlights} />
            <AccountItem title="Average FlySafe score" ccontent={this.state.userObject.totalFlySafeScore} />
            <AccountItem title="Total time flown" ccontent={this.state.userObject.totalTimeFlown} />
          {/* </ScrollView> */}
        </View>
      </Screen>
    );
  }
}

export default Account;