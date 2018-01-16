import React from 'react';
import { TouchableOpacity, Text, View, AsyncStorage } from 'react-native';
import { Redirect } from 'react-router';
import axios from 'axios';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';
import Toast from 'react-native-simple-toast';

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

const InitialButton = (props) => {
  const login = () => {
    const details = {
      username: values.username,
      password: values.password,
      grant_type: 'password'
    };

    if(true
      //[values.username].length > 0 && [values.password].length > 8
    ) {
      fetch('http://liftoffapi.azurewebsites.net/token', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: encode(details)
      }).then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
          AsyncStorage.setItem('@username', '');
          //props.router.push("/home");
        } else {
          Toast.show(language.loginError);
        }
      }).catch((error) => {
        Toast.show(language.serverError);
      });
    } else {
      if([values.password].length < 8) {
        Toast.show(language.passwordLength);
      } else {
        Toast.show(language.loginError);
      }
    }
  };

  const register = () => {
    const details = {
      username: values.username,
      password: values.password,
      grant_type: 'password'
    };

    if(true
      //[values.email].length > 0 && [values.username].length > 0 && [values.password].length > 8
    ) {
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
              //props.router.push("/home");
            }
          }).catch((error) => {
            Toast.show(language.serverError);
          });
        } else {
          Toast.show(language.registerError);
          console.log(response)
        }
      }).catch((error) => {
        Toast.show(language.serverError);
      });
    } else {
      if ([values.password].length < 8) {
        Toast.show(language.passwordLength);
      } else {
        Toast.show(language.registerError);
      }
    }
  }

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
        <Text style={[globals.buttonInner]}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitialButton;