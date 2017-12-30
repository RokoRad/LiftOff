let lang = 'hr',
    language;

if (lang === 'hr') {
  import('./languages/hr.js').then((response) => { 
    console.log(response);
    language = response.language;
  });
} else {
  import('./languages/en.js').then((response) => { 
    language = response.language;
  });
}

export { language };