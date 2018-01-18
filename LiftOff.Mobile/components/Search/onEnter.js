import key from '../../config/googleKey.js';

const onEnter = (value) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then((response) => {
    const data = JSON.parse(response._bodyInit);
    const location = {
      location: data.results[0].geometry.location.lat,
      longitude: data.results[0].geometry.location.lng
    }
    console.log(location);
  })
}

export default onEnter;