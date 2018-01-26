import { AsyncStorage } from 'react-native';

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

AsyncStorage.getItem('@logs').then((logs) => {
  console.log(logs)
})

const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_LOG':
      return {
        logs: [
          ...state.logs,
          {
            id: state.logs.length++,
            saved: false,
            location: action.payload.location,
            rating: action.payload.rating,
            time: _time()
          }
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