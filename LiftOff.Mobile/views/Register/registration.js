import Toast from '../../functions/toast';
import language from '../../languages';
import { changeLoading } from '../../actions';
import store from '../../store';

export default (data, history) => {
  // promjena contenta botuna
  store.dispatch(changeLoading());
  // fetchanje ako su podatci ispravni fizički
  if (data.username.length != 0 && data.email.length != 0 && data.password.length > 7) {
    fetch('http://liftoffinfokup.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          // povratak na login i prikazivanje toasta
          history.push('/');
          Toast(`${language.registrationSuccess}`);
        } else {
          Toast(`${language.serverError}`);
        }
        store.dispatch(changeLoading());
      })
      .catch(error => {
        Toast(`${language.serverError}`);
        store.dispatch(changeLoading());
      });
  } else {
    if ([data.password].length < 8) {
      Toast(`${language.passwordError}`);
    } else {
      Toast(`${language.invalidInput}`);
    }
    store.dispatch(changeLoading());
  }
};
