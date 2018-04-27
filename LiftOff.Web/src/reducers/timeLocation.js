const initialState = {
  timeLocation: {
    location: {
      lat: 45.8157778,
      lng: 16.0091944
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
    case 'UPDATE_TIMELOCATION':
      return {
        timeLocation: {
          time: state.timeLocation.time,
          location: action.payload
        }
      };
    default:
      return state;
  }
};
