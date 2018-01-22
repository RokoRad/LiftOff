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
    case 'SET_STARTTIME': 
      return {
        stopwatch: {
          ...state.stopwatch,
          startTime: action.payload
        }
      }

    case 'TOGGLE_STOPWATCH': 
      return {
        stopwatch: {
          ...state.stopwatch,
          active: !state.active
        }
      }
      
    case 'UPDATE_SECONDS': 
      return {
        stopwatch: {
          ...state.stopwatch,
          seconds: action.payload
        }
      }

    case 'UPDATE_MINUTES': 
      return {
        stopwatch: {
          ...state.stopwatch,
          minutes: action.payload
        }
      }

    default:
        return state;
  }
};

export default stopwatchReducer;