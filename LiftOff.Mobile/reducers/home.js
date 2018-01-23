const initialState = {
  home: {}
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_DATA':
      return  {
        home: {
          ...action.payload
        }
      };
      default:
          return state;
  }
};


export default homeReducer;