const initialState = {
  map: []
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_LOCAION':
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