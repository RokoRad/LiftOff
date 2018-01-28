import { AsyncStorage } from 'react-native';

const initialState = {
  drone: 'DJI Spark',
  units: 'imperial'
};

AsyncStorage.getItem('@drone').then(drone => {
  if (drone) {
    initialState.drone = drone;
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DRONE':
      return {
        ...state,
        drone: action.payload
      };

    case 'CHANGE_UNITS':
      return {
        ...state,
        units: action.payload
      };

    default:
      return state;
  }
};
