// definiranje postavki jezika
let lang = 'hr',
    language;

// dinamčiko includanje jezika te primanje podataka
import(`./languages/${lang}.js`).then((response) => language = response.language);


// vraćanje jezika
export { language };