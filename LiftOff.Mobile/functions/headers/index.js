const headers = (token) => {
  return {
    'Authorization': 'Bearer ' + token,
    'Content-type': 'application/json'
  }
}

export default headers;