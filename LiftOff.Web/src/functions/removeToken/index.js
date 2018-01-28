import token from './token';
import language from '../../languages';

export default history => {
  token.remove();
  history.push('/');
};
