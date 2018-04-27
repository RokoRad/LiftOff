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
        latitude: 45.8157778,
        longitude: 16.0091944
      },
      id: 0
    },
    {
      flightLocation: {
        latitude: 45.77,
        longitude: 16.07
      },
      id: 1
    },
    {
      flightLocation: {
        latitude: 45.78,
        longitude: 15.98
      },
      id: 2
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
