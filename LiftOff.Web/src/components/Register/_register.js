import 'whatwg-fetch';
import language from '../../languages';

export default object => {
  if (object.username.length > 0 && object.email.length > 0) {
    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        } else {
          alert(language.Input)
        }
      })
      .catch(error => {
        alert(language.serverError);
      });
  } else {
    alert(language.Input)
  }
};
