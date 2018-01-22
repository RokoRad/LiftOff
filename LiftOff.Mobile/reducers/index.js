import { combineReducers } from 'redux'
import logsReducer from './logs.js';
import mapReducer from './map.js';
import stopwatchReducer from './stopwatch.js';

export default combineReducers({
  logsReducer,
  mapReducer
})