import Toast from 'react-native-simple-toast';

const registration = (data, history) => {
  if(data.username.length != 0 && data.email.length != 0 && data.password.length > 8) {
    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      console.log(response)
      if(response.status === 200) {
        history.push("/");
        // toast registracija obavljena
      } else {
        // puka server
      }
    }).catch((error) => {
      console.log(error);
      // puka server
    });
    // pozitivan unos
  } else {
    if([data.password].length < 8) {
      console.log(data.password.length);
      console.log(data.password);
      console.log("manji od 8")
      // password manji od 8
    } else {
      console.log("krivi tip")
      // Toast.show("") KRIVI PODATCI
    }
  }
}

export default registration;