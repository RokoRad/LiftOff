const initialState = {
  stopwatch: {
    active: false,
    startTime: '',
    minutes: 0,
    seconds: 0
  }
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STARTTIME': {
      return {
        ...state.stopwatch,
        startTime: action.payload
      }
    }
    case 'TOGGLE_STOPWATCH':
      return {
        ...state.stopwatch,
        active: action.payload
      }
    case 'UPDATE_SECONDS': {
      return {
        ...state.stopwatch,
        seconds: action.payload
      }
    }
    case 'UPDATE_MINUTES': {
      return {
        ...state.stopwatch,
        minutes: action.payload
      }
    }
    default:
        return state;
  }
};

export default stopwatchReducer;