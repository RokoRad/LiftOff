import token from '../token';

export default () => {
  return {
    Authorization: 'Bearer ' + token.get(),
    'Content-type': 'application/json'
  };
};
