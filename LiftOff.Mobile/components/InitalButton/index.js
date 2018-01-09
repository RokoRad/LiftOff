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
        AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
        props.router.push("/home");
      } else {
        // krivi login podatci
      }
    }).catch((error) => {
      // server error
    });
  };

  const register = () => {
    const details = {
      username: values.username,
      password: values.password,
      grant_type: 'password'
    };

    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        fetch('http://liftoffapi.azurewebsites.net/token', {  
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: encode(details)
        }).then((response) => {
          if (response.status === 200) {
            AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
            props.router.push("/home");
          } else {
            // krivi login podatci
          }
        }).catch((error) => {
          // server error
        });
      } else {
        // krivi register podatci
      }
    }).catch((error) => {
      // server error
    });
  }

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
        <Text style={globals.buttonInner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;