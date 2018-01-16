import Toast from 'react-native-simple-toast';

const registration = (data) => {
  if([data.username].length != 0 && [data.email].length != 0 && [data.password].length > 8) {
    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if(response.status === 200) {
        AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
        props.router.push("/");
        // toast registracija obavljena
      } else {
        // puka server
      }
    }).catch((error) => {
      // puka server
    });
    // pozitivan unos
  } else {
    if([data.password].length < 9) {
      // password manji od 8
    } else {
      // Toast.show("") KRIVI PODATCI
    }
  }
}

export default registration;