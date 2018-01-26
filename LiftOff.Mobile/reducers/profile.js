import { AsyncStorage } from 'react-native';

const initialState = {
  stats: {
    email: '/',
    favoriteFlightSpot: '/',
    favoriteFlightTime: '/',
    totalFlights: '/',
    totalFlySafeScore: '/',
    totalTimeFlown: '/',
    userName: '/'
  },
  markers: [

  ]
};

AsyncStorage.getItem('@stats').then((stats) => {
  initialState.stats = JSON.parse(stats);
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATS':
      return  {
        stats: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};