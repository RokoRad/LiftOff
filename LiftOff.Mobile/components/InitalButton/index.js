import React from 'react';
import { TouchableOpacity, Text, View, AsyncStorage } from 'react-native';
import { Redirect } from 'react-router';
import axios from 'axios';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const encode = (value) => {
  let object = [];
  for (let property in value) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(value[property]);
    object.push(encodedKey + "=" + encodedValue);
  }
  object = object.join("&");
  return object;
}

const InitalButton = (props) => {
  const login = () => {
    const details = {
      username: values.username,
      password: values.password,
      grant_type: 'password'
    };
    fetch('http://liftoffapi.azurewebsites.net/token', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: encode(details)
    }).then((response) => {
      if (response.status === 200) {
        console.log("prosa")
      } else {
        console.log(response)
      }
    }).catch((error) => {
      console.log(error)
    });
    // axios.post('http://liftoffapi.azurewebsites.net/token', {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //   },
    //   body: encode(details)
    // }).then((response) => {
    //   if(response.status === 200) {
    //     console.log(response);
    //     // AsyncStorage.setItem('@token', '3');
    //     // AsyncStorage.getItem('@token').then((value) => console.log(value));
    //     // prosa
    //     props.router.push("/home");
    //   } else {
    //     console.log(response)
    //     // error
    //   }
    // }).catch((error) => 
    //   console.log(error)
    // );
  };

  const register = () => {
    const details = {
      username: values.username,
      password: values.password,
      grant_type: 'password'
    };
    axios({
      method: 'post',
      url: 'http://liftoffapi.azurewebsites.net/api/account/register',
      body: values
    }).then((response) => {
      if(response.status === 200) {
        axios({
          method: 'post',
          url: 'http://liftoffapi.azurewebsites.net/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: encode(details)
        }).then((response) => {
          if(response.status === 200) {
            // prosa
            props.router.push("/home");
          } else {
            // error
          }
        }).catch((error) => 
          console.log(error)
        );
      } else {
        // error
      }
    }).catch((error) => 
      console.log(error)
    );
  };

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
        <Text style={globals.buttonInner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;