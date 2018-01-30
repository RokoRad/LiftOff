import { AsyncStorage } from 'react-native';

const deltas = {
  longitudeDelta: 0.1,
  latitudeDelta: 0.1
};

const initialState = {
  timeLocation: {
    location: {
      latitude: 43.508133,
      longitude: 16.440193,
      ...deltas
    },
    time: new Date().toISOString()
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATETIME':
      return {
        timeLocation: {
          ...state.timeLocation,
          time: action.payload
        }
      };
    // case 'UPDATE_LOCATION':
    //   return  {
    //     timeLocation: {
    //       ...action.payload
    //     }
    //   };
    default:
      return state;
  }
};