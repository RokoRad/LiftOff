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
