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
    {
      flightLocation: {
        latitude: 43.508133,
        longitude: 16.440193
      },
      id: 0
    },
    {
      flightLocation: {
        latitude: 43.5408133,
        longitude: 16.440193
      },
      id: 1
    }
  ]
};

AsyncStorage.getItem('@stats').then(stats => {
  initialState.stats = JSON.parse(stats);
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATS':
      return {
        ...state,
        stats: {
          ...action.payload
        }
      };
    case 'UPDATE_MARKERS':
      return {
        ...state,
        markers: [action.payload]
      };
    default:
      return state;
  }
};
