import { combineReducers } from 'redux';
import mapReducer from './map.js';
import profileReducer from './profile.js';
import homeReducer from './home.js';
import timeLocationReducer from './timeLocation.js';
import initialReducer from './initial.js';
import dashboardReducer from './dashboard.js';

export default combineReducers({
  mapReducer,
  profileReducer,
  timeLocationReducer,
  homeReducer,
  initialReducer,
  dashboardReducer
})