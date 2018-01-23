import { combineReducers } from 'redux'
import logsReducer from './logs.js';
import mapReducer from './map.js';
import stopwatchReducer from './stopwatch.js';
import profileReducer from './profile.js';
import homeReducer from './home.js';
import timeLocationReducer from './timeLocation.js';

export default combineReducers({
  stopwatchReducer,
  logsReducer,
  mapReducer,
  profileReducer,
  timeLocationReducer
})