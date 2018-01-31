import storage from '../../functions/storage';

const lang = storage.get('@language');

export default () => {
  if(lang === 'hr') {
    storage.set('@language', 'en');
  } else {
    storage.set('@language', 'hr');
  }
  window.location.href = '/dashboard';
}