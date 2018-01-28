import { Location, Permissions } from 'expo';

export default async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
    maximumAge: 900
  }).then(response => {});
};
