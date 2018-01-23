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

export const addLog = (payload) => ({
  type: 'ADD_LOG',
  payload
});

export const selectLog = (payload) => ({
  type: 'ADD_LOG',
  payload
});

export const updateStats = (payload) => ({
  type: 'UPDATE_STATS',
  payload
});

export const updateHome = (payload) => ({
  type: 'UPDATE_HOME',
  payload
});