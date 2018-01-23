const initialState = {
  stats: {
    email: '/',
    favoriteFlightSpot: '/',
    favoriteFlightTime: '/',
    totalFlights: '/',
    totalFlySafeScore: '/',
    totalTimeFlown: '/',
    userName: '/'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_STATS':
      return  {
        stats: [
          ...action.payload
        ]
      };
      default:
          return state;
  }
};