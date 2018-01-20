import { AsyncStorage } from 'react-native';

let language;

AsyncStorage.getItem('@language').then((response) => {
  if(response === 'hr') {
      import('./hr').then((response) => language = response.strings);
  } else {
      import('./en').then((response) => language = response.strings);
      AsyncStorage.setItem('@language', 'en');
  }
  console.log(response)
});

export default language;