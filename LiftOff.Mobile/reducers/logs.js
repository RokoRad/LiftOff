const initialState = {
  logs: [
    {
      id: 0,
      saved: true,
      location: 'test',
      score: 2.2,
      time: '22:10'
    },
    {
      id: 1,
      saved: false,
      location: 'test',
      score: 4.2,
      time: '22:10'
    }
  ]
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