import Toast from '../../functions/toast';
import language from '../../languages';
import { changeLoading } from '../../actions';
import store from '../../store';

export default (data, history) => {
  store.dispatch(changeLoading());
  if (data.username.length != 0 && data.email.length != 0 && data.password.length > 8) {
    fetch('http://liftoffinfokup.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
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
    if ([data.password].length < 7) {
      Toast(`${language.passwordError}`);
    } else {
      Toast(`${language.invalidInput}`);
    }
    store.dispatch(changeLoading());
  }
};
