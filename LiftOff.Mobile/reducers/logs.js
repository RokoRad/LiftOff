const initialState = {
  logs: [
    {
      id: 0,
      saved: true,
      location: 'test',
      rating: 3,
      time: '22:10'
    },
    {
      id: 1,
      saved: false,
      location: 'test',
      rating: 4.2222,
      time: '22:10'
    }
  ]
};

const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_LOG':
      return {
        logs: [
          ...state.logs,
          {
            id: state.logs.length++,
            saved: false,
            location: action.payload.location,
            rating: action.payload.rating,
            time: '00:00'
          }
        ]
      };
      // case 'UPDATE_LOG':
      // return  {

      // };
      default:
          return state;
  }
};


export default logsReducer;