// definiranje postavki jezika
let lang = 'hr',
    language;

// za naznačeni jezik vraćamo response, default je engleski
if (lang === 'hr') {
  import('./languages/hr.js').then((response) => { 
    language = response.language;
  });
} else {
  import('./languages/en.js').then((response) => { 
    language = response.language;
  });
}

// vraćanje jezika
export { language };