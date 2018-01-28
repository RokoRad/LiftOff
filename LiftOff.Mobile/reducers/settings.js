import { AsyncStorage } from 'react-native';

const initialState = {
  drone: 'DJI Spark'
};

AsyncStorage.getItem('@drone').then(drone => {
  if(drone) {
    initialState.drone = drone
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DRONE':
      return {
        drone: action.payload
      };

    default:
      return state;
  }
};
