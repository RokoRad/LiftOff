import Toast from 'react-native-simple-toast';
import language from '../../languages';

export default (data, history) => {
  if(data.username.length != 0 && data.email.length != 0 && data.password.length > 8) {
    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if(response.status === 200) {
        history.push("/");
        Toast.show(`${language.registrationSuccess}`)
      } else {
        Toast.show(`${language.serverError}`)
      }
    }).catch((error) => {
      Toast.show(`${language.serverError}`)
    });
  } else {
    if([data.password].length < 7) {
      Toast.show(`${language.passwordError}`)
    } else {
      Toast.show(`${language.invalidInput}`)
    }
  }
}