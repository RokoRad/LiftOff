// definiranje postavki jezika
import { AsyncStorage } from 'react-native';

let language;
let lng;

// provjera jezika
AsyncStorage.getItem('language').then((response) => {
    if(response === 'hr') {
        import('./languages/hr.js').then((response) => language = response.language); 
        lng = 'hr';
    } else {
        import('./languages/en.js').then((response) => language = response.language);
        AsyncStorage.setItem('language', 'en');
        lng = 'en';
    }
    console.log(response)
});

export { lng, language };