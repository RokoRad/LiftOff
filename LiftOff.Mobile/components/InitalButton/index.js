import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router';
import axios from 'axios';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

const InitalButton = (props) => {
  const login = () => {
    axios.post('http://localhost:52037/token', {...values, grant_type: 'password'}).then((reponse) =>
      console.log(reponse);
    ).catch((error) => 
      console.log(error)
    );
  //   fetch('http://localhost:52037/token', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       ...values,
  //       'grant_type': 'password'
  //     })
  //   }).then((repsonse) =>
  //   console.log(response)
  //   //props.router.push("/home")
  //   //console.log("usa register")
  // ).catch((error) =>
  //   console.log(error)
  // )
  };

  const register = () => {
    axios.post('http://localhost:52037/api/account/register', ...values).then((reponse) =>
      console.log(reponse);
    ).catch((error) => 
      console.log(error)
    );
  // fetch('http://localhost:52037/api/account/register', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     ...values
  //   })
  // }).then((response) =>
  //   console.log(response)

  // ).catch((error) =>
  //   console.log(error)
  // )
};

  return(
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, {backgroundColor: '#3f6ea7'}]}>
        <Text style={globals.buttonInner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;