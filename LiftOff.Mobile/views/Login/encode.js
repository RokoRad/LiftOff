// za uspostavit login funkciju, naš server treba primiti podatke u obliku encoded-urla,
// a ne standarnog json oblika. Stoga ova funkcija zadani objekt pretvara u encoded oblik
// kojeg zatim vraća kao string

export default value => {
  let object = [];
  for (let property in value) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(value[property]);
    object.push(encodedKey + '=' + encodedValue);
  }
  object = object.join('&');
  return object;
};
