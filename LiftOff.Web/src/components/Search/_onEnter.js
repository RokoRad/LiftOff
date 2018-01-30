import store from '../../store';
import 'whatwg-fetch';
import { updateLocation } from '../../actions';

const key = 'AIzaSyB72p06i9XP1ypkoDfhaGgF3aK8bFg3AHY';

export default (value, object) => {
  if(value.key === 'Enter') {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${object}&key=${key}`).then(
      response => {
        response.json().then((value) => {
          const parsed = value.results[0].geometry.location;
          store.dispatch(
            updateLocation({
              latitude: parsed.lat,
              longitude: parsed.lng
            })
          );
          console.log(parsed)
        })
      }
    );
  }
};
