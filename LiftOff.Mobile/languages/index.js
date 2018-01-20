import { AsyncStorage } from 'react-native';
import croatian from './hr';
import english from './en';

const language = (value) => {
  AsyncStorage.getItem('@language').then((response) => {
    if(response === 'hr') {
      return croatian.value;
  } else {
      AsyncStorage.setItem('@language', 'en');
      return english.value;
  }   
  })
}

// const language = AsyncStorage.getItem('@language').then((response) => {
//   if(response === 'hr') {
//       return 'croatian';
//   } else {
//       AsyncStorage.setItem('@language', 'en');
//       return 'engliish'.then();
//   }
// });

export default language;