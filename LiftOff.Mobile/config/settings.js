import { storage } from '../functions/storage';

// definiranje postavki jezika
let language;

// provjera jezika
if(storage.get('language') === 'hr') {
    import('./languages/hr.js').then((response) => language = response.language);
} else {
    import('./languages/en.js').then((response) => language = response.language);
    storage.set('language', 'en'); // callback ako je ne postojec
}

export { language };