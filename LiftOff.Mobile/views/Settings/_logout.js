import removeToken from '../../functions/removeToken';

// funckija za logoutanje koja se referira na removeToken
export default history => {
  removeToken(history);
};
