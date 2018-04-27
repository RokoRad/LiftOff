import 'whatwg-fetch';
import _encode from './_encode.js';
import token from '../../functions/token';
import language from '../../languages';

export default data => {
  if (data.username.length > 0 && data.password.length > 7) {
    const object = {
      ...data,
      grant_type: 'password'
    };
    fetch('http://liftoffinfokup.azurewebsites.net/api/account/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: _encode(object)
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(value => {
            token.set(value.access_token);
            window.location.href = '/dashboard';
          });
        } else {
          alert(language.Input);
        }
      })
      .catch(error => {
        alert(language.serverError);
      });
  } else {
    alert(language.Input);
  }
};
