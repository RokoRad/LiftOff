export default object => {
  if (object.username > 0 && object.email > 0) {
    fetch('http://liftoffapi.azurewebsites.net/api/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.warn('server ili podatci');
          // server ili podatci
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        // error
      });
  } else {
    // nije full
  }
  console.log(object);
};
