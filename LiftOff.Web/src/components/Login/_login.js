import 'whatwg-fetch';
import _encode from './_encode.js';
import language from '../../languages';

export default data => {
  if (data.username.length > 0 && data.password.length > 7) {
    const object = {
      ...data,
      grant_type: 'password'
    };
    fetch('http://liftoffapi.azurewebsites.net/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: _encode(object)
    }).then((response) => {
      if (response.status === 200) {

      } else {
        alert(language.Input);
      }
      console.log(response)
    }).catch((error) => {
      alert(language.serverError)
    })
  } else {
    alert(language.Input)
  }
};
