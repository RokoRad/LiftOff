import Toast from '../../functions/toast';
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
        Toast(`${language.registrationSuccess}`)
      } else {
        Toast(`${language.serverError}`)
      }
    }).catch((error) => {
      Toast(`${language.serverError}`)
    });
  } else {
    if([data.password].length < 7) {
      Toast(`${language.passwordError}`)
    } else {
      Toast(`${language.invalidInput}`)
    }
  }
}