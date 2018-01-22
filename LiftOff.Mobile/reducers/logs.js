const initialState = {
  logs: []
};

const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      // case 'ADD_LOG':
      // return  {
      //   logs: [
      //     // ubacit novi
      //     ...state.logs
      //   ]
      // };
      // case 'UPDATE_LOG':
      // return  {

      // };
      default:
          return state;
  }
};


export default logsReducer;