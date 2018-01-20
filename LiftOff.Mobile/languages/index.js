import { AsyncStorage } from 'react-native';

let language;

AsyncStorage.getItem('@language').then((response) => {
  if(response === 'hr') {
      //import('./hr').then((response) => language = response);
      import('./hr').then((value) => {
        console.log(value);
        language = value;
      })
  } else {
      import('./en').then((value) => language = value);
      AsyncStorage.setItem('@language', 'en');
  }
  console.log(response)
});

export default language;