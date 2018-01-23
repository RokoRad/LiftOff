import { combineReducers } from 'redux'
import logsReducer from './logs.js';
import mapReducer from './map.js';
import stopwatchReducer from './stopwatch.js';
import profileReducer from './profile.js';

export default combineReducers({
  stopwatchReducer,
  logsReducer,
  mapReducer
})