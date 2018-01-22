import { combineReducers } from 'redux'
import logsReducer from './logs.js';
import mapReducer from './map.js';

export default combineReducers({
  logsReducer,
  mapReducer
})