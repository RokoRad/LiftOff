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
        active: action.payload.active,
        startTime: action.payload.startTime,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds
      }
    default:
        return state;
  }
};

export default stopwatchReducer;