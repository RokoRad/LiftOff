import { AsyncStorage } from 'react-native';
import round from '../functions/round';

const initialState = {
  logs: [

  ]
};

const _time = () => {
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  } 
  
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes}`
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOG':
      return {
        // logs: [
        //   {
        //     id: state.logs.length++,
        //     saved: false,
        //     location: action.payload.location,
        //     rating: round(action.payload.rating),
        //     time: _time()
        //   },
        //   ...state.logs.slice(0, -1)
        // ]
        logs: [
          ...state.logs,
          {
            id: state.logs.length++,
            saved: false,
            location: action.payload.location,
            rating: round(action.payload.rating),
            time: _time()
          }
        ]
      };
    case 'SAVE_LOG':
      return {
        logs: [
          ...state.logs.slice(0, action.payload),
          {
            id: action.payload,
            saved: true,
            location: state.logs[action.payload].location,
            rating: state.logs[action.payload].rating,
            time: state.logs[action.payload].time
          },
          ...state.logs.slice(action.payload + 1)
        ]
      }
    default:
        return state;
  }
};