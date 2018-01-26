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
  type: 'SELECT_LOG',
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

export const updateDateTime = (payload) => ({
  type: 'UPDATE_DATETIME',
  payload
});

export const setMarker = (payload) => ({
  type: 'SET_MARKER',
  payload
});


export const updateLocation = (payload) => ({
  type: 'UPDATE_LOCATION',
  payload
});

export const tooltipStatus = (payload) => ({
  type: 'TOOLTIP_STATUS',
  payload
});

export const updateTooltip = (payload) => ({
  type: 'UPDATE_TOOLIP',
  payload
});