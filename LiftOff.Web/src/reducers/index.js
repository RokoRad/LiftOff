import { combineReducers } from 'redux';
import mapReducer from './map.js';
import timeLocationReducer from './timeLocation.js';
import homeReducer from './home.js';
import dashboardReducer from './dashboard.js';

export default combineReducers({
  mapReducer,
  timeLocationReducer,
  homeReducer,
  dashboardReducer
});
