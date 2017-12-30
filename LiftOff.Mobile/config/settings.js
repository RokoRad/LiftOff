let lang = 'en';

if (lang === 'en') {
  import { language } from './languages/en.js';
} else if (lang === 'hr') {
  import { language } from './languages/hr.js';
}

export { language };