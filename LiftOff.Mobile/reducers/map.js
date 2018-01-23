const initialState = {
  map: {
    
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_LOCATION':
      return  {
        map: [
          // ubacit novi
          ...state.map
        ]
      };
      case 'SET_LOCATION':
      return {
        map: [
          ...state.map
        ]
      };
      default:
          return state;
  }
};


export default mapReducer;