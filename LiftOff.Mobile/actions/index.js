// niz akcija koje služe za lakše povezivanje sa redux storom
// svaka je definirana kao funkcija koja prima podatke
// zatim funkcija vraća objekt sa imenom akcije te istim podatcima
// kada želimo potaknuti promjenu stanja u reduxu, pozovemo funkciju akcije i pošaljemo podatke
// store prima ime (tip) akcije te podatke, čime definira što i kako će se promijeniti u storeu

// svaka akcija je exportana kako bi se mogla direketno pristupiti u vanjskoj komponenti
export const changeAllow = payload => ({
  type: 'CHANGE_ALLOW',
  payload
});


export const toggleStopwatch = payload => ({
  type: 'TOGGLE_STOPWATCH',
  payload
});

export const setStarttime = payload => ({
  type: 'SET_STARTTIME',
  payload
});

export const updateSeconds = payload => ({
  type: 'UPDATE_SECONDS',
  payload
});

export const updateMinutes = payload => ({
  type: 'UPDATE_MINUTES',
  payload
});

export const addLog = payload => ({
  type: 'ADD_LOG',
  payload
});

export const saveLog = payload => ({
  type: 'SAVE_LOG',
  payload
});

export const updateStats = payload => ({
  type: 'UPDATE_STATS',
  payload
});

export const updateHome = payload => ({
  type: 'UPDATE_HOME',
  payload
});

export const updateDateTime = payload => ({
  type: 'UPDATE_DATETIME',
  payload
});

export const setMarker = payload => ({
  type: 'SET_MARKER',
  payload
});

export const updateLocation = payload => ({
  type: 'UPDATE_LOCATION',
  payload
});

export const tooltipStatus = payload => ({
  type: 'TOOLTIP_STATUS',
  payload
});

export const updateTooltip = payload => ({
  type: 'UPDATE_TOOLTIP',
  payload
});

export const updateMarkers = payload => ({
  type: 'UPDATE_MARKERS',
  payload
});

export const changeLoading = () => ({
  type: 'CHANGE_LOADING'
});

export const changeDrone = payload => ({
  type: 'CHANGE_DRONE',
  payload
});

export const changeUnits = payload => ({
  type: 'CHANGE_UNITS',
  payload
});

export const updateZones = payload => ({
  type: 'UPDATE_ZONES',
  payload
});
