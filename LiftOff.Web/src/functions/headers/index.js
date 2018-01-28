export default token => {
  return {
    Authorization: 'Bearer ' + token,
    'Content-type': 'application/json'
  };
};
