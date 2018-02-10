import token from '../token';
// import language from '../../languages';

export default () => {
  token.remove();
  window.location.href = '/';
};
