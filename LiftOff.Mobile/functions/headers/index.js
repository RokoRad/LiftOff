// funkcija koja za primljeni parametar tokena vraća header tip za fetchanje podataka

export default token => {
  return {
    Authorization: 'Bearer ' + token,
    'Content-type': 'application/json'
  };
};
