import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router';
import axios from 'axios';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const encode = (value) => {
  let object = [];
  for (var property in value) {
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

    axios({
      method: 'post',
      url: 'http://liftoffapi.azurewebsites.net/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data: encode(details)
    }).then((response) => {
      if(response.status === 200) {
        // prosa
        props.router.push("/home");
      } else {
        // error
      }
    });
  };

  const register = () => {



    axios.post('http://liftoffapi.azurewebsites.net/api/account/register', values).then((response) =>
      props.router.push("/home")
    ).catch((error) =>
      console.log('errrrr', JSON.stringify(error))
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