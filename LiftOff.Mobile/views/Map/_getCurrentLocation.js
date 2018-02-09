// dohvaćanje modula za gps i dozvole
import { Location, Permissions } from 'expo';
import store from '../../store';
import { updateLocation } from '../../actions';

// ovisno o stanju gpsa (upaljen/izgašen/dozvoljen/odbijen) vraća trenutnu lokaciju
// sa velikom preciznosti koja se ovisno o promjeni ažurira svakih 900 sekundi.

export default async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
    maximumAge: 900
  }).then(response => {
    // store.dispatch(updateLocation(value));
    console.log('gps', response)
  });
};
