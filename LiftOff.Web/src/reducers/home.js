import { AsyncStorage } from 'react-native';

const initialState = {
  home: {
    advisoryRating: {
      croatian: 'Učitavanje podatka..',
      english: 'Fetching data..'
    },
    atmosphereRating: 'N/A',
    conditionsRating: 'N/A',
    temperatureRating: 'N/A',
    totalRating: 'N/A',
    UVRating: 'N/A',
    visibilityRating: 'N/A',
    windRating: 'N/A',
    weatherData: {
      cloudiness: 'N/A',
      humidity: 'N/A',
      max_Temperature: 'N/A',
      min_Temperature: 'N/A',
      presssure: 'N/A',
      temperature: 'N/A',
      timeLocation: {
        location: {
          latitude: 43.508133,
          longitude: 16.440193
        },
        time: new Date().toISOString()
      },
      UVIndex: 'N/A',
      units: 'metric',
      visibility: 'N/A',
      weather: 'N/A',
      weatherDescription: 'N/A',
      weatherID: 'N/A',
      windDirection: 'N/A',
      windSpeed: 'N/A'
    }
  }
};

AsyncStorage.getItem('@realtime').then(realtime => {
  if (realtime) {
    initialState.home = JSON.parse(realtime);
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HOME':
      return {
        home: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
