import { AsyncStorage } from 'react-native';
import round from '../functions/round';

const initialState = {
  logs: [
    {
      id: 0,
      saved: false,
      location: 'Solin',
      rating: 4.7,
      time: '12:10'
    }
  ]
};

const _time = () => {
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes}`
}

// AsyncStorage.getItem('@logs').then((logs) => {
//   console.log(logs)
// })

const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_LOG':
      return {
        logs: [
          {
            id: state.logs.length++,
            saved: false,
            location: action.payload.location,
            rating: round(action.payload.rating),
            time: _time()
          },
          ...state.logs.slice(0, -1)
        ]
      };
      // case 'UPDATE_LOG':
      // return  {

      // };
      default:
          return state;
  }
};


export default logsReducer;