const initialState = {
  stopwatch: [
    active: false,
    startTime: 0,
    minutes: 0,
    seconds: 0
  ]
};

export const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case : 'UPDATE_STOPWATCH':
      return {
        ...stopwatch,
        active: state.active,
        startTime: state.startTime,
        minutes: state.minutes,
        seconds: state.seconds
      }

    default:
        return state;
  }
};