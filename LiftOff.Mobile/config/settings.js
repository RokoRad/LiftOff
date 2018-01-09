// definiranje postavki jezika
import { AsyncStorage } from 'react-native';

let language;

// provjera jezika
if(AsyncStorage.getItem('language').then() === 'hr') {
    import('./languages/hr.js').then((response) => language = response.language);
} else {
    import('./languages/en.js').then((response) => language = response.language);
    AsyncStorage.setItem('language', 'en');
}

export { language };