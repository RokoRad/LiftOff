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
      // case 'SET_DATA':
      // return  {
      //   home: {
      //     ...action.payload
      //   }
      // };
      default:
          return state;
  }
};


export default timeLocationReducer;