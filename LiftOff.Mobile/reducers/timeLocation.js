import { AsyncStorage } from 'react-native';

const initialState = {
  timeLocation: {
    location: {
      latitude: 43.508133,
      longitude: 16.440193,
    },
    time: new Date().toISOString()
  }
};

const timeLocationReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_DATETIME':
        return  {
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


export default timeLocationReducer;