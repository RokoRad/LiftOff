const initialState = {
  stopwatch: {
    active: false,
    startTime: 0,
    minutes: 0,
    seconds: 0
  }
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STOPWATCH':
      return {
        ...state.stopwatch,
        ...action.payload
      }
    default:
        return state;
  }
};

export default stopwatchReducer;