export const toggleStopwatch = (payload) => ({
  type: 'TOGGLE_STOPWATCH',
  payload,
});

export const setStarttime = (payload) => ({
  type: 'SET_STARTTIME',
  payload,
});

export const updateSeconds = (payload) => ({
  type: 'UPDATE_SECONDS',
  payload,
});

export const updateMinutes = (payload) => ({
  type: 'UPDATE_MINUTES',
  payload,
});