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

const login = (data) => {
  if([data.username].length != 0 && [data.password].length > 8) {
    fetch('http://liftoffapi.azurewebsites.net/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: encode(data)
    }).then((response) => {
      if(response.status === 200) {
        AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
        props.router.push("/home");
      } else {
        // puka server
      }
    }).catch((error) => {
      // puka server
    });
  } else {
    if([data.password].length < 9) {
      // password manji od 8
    } else {
      // Toast.show("") KRIVI PODATCI
    }
  }
}

export default login;

