const initialState = {
  logs: []
};

export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_LOG':
      return  {
        logs: [
          // ubacit novi
          ...state.logs
        ]
      };
      // case 'UPDATE_LOG':
      // return  {

      // };
      default:
          return state;
  }
};