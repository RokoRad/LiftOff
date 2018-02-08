import { AsyncStorage } from 'react-native';

const initialState = {
  drone: 'DJI Spark',
  units: 'imperial',
  allow: true
};

AsyncStorage.getItem('@drone').then(drone => {
  if (drone) {
    initialState.drone = drone;
  }
});

AsyncStorage.getItem('@allow').then(allow => {
  if (allow) {
    initialState.allow = allow;
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
    case 'CHANGE_ALLOW':
      return {
        ...state,
        allow: !state.allow
      };

    default:
      return state;
  }
};
