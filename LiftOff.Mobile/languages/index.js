import { AsyncStorage } from 'react-native';
import croatian from './hr';
import english from './en';

const language = AsyncStorage.getItem('@language').then((response) => {
  if(response === 'hr') {
    return croatian;
} else {
    AsyncStorage.setItem('@language', 'en');
    return english;
  }   
});

// const language = AsyncStorage.getItem('@language').then((response) => {
//   if(response === 'hr') {
//       return 'croatian';
//   } else {
//       AsyncStorage.setItem('@language', 'en');
//       return 'engliish'.then();
//   }
// });

export default language;