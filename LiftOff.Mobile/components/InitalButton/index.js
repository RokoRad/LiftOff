import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Redirect } from 'react-router';
import axios from 'axios';
import globals from '../../config/styles.js';
import { language } from '../../config/settings.js';
import values from '../../functions/values';

//{...values, grant_type: 'password'})

// var details = {
//   'username': 'kukatukan',
//   'password': 'kukatukan',
//   'grant_type': 'password'
// };

const createFormBody = details => {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}

// fetch('https://example.com/login', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
// },
// body: formBody
// })


const InitalButton = (props) => {
  const login = () => {
    // token?grant_type=password&amp;username=test&amp;password=test
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
      body: createFormBody(details)
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        props.router.push("/home");
      } else {
        console.log(response)
      }
    }
      ).catch((error) =>
        console.log('err', JSON.stringify(error))
      );
    //axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response)).catch(err => console.log('err', err));
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
    axios.post('http://liftoffapi.azurewebsites.net/api/account/register', values).then((response) =>
      props.router.push("/home")
    ).catch((error) =>
      console.log('errrrr', JSON.stringify(error))
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

  return (
    <TouchableOpacity onPress={() => (props.action === 'login' ? login() : register())} opacity={0.8}>
      <View style={[globals.buttonWrapper, { backgroundColor: '#3f6ea7' }]}>
        <Text style={globals.buttonInner}>{language[props.type]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InitalButton;