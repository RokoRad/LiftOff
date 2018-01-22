const initialState = {
  stopwatch: [
    active: false,
    startTime: 0,
    minutes: 0,
    seconds: 0
  ]
};

import { clearStopwatch, raiseSeconds, raiseMinutes, clearSeconds } from '../../actions/stopwatch.js';


export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_STOPWATCH':
    return {
      ...stopwatch,
      active: !state.active
    };
    case 'CLEAR_STOPWATCH':
      return {

      };
    case 'RAISE_SECONDS':
      return {

      };
    case 'RAISE_MINUTES':
      return {

      };
    case 'CLEAR_SECONDS':
      return {

      };

    default:
        return state;
  }
};