import { AsyncStorage } from 'react-native';

const initialState = {
  home: {
    AdvisoryRating: {
      Croatian: 'Učitavanje podatka..',
      English: 'Fetching data..'
    },
    AtmosphereRating: 'N/A',
    ConditionsRating: 'N/A',
    TemperatureRating: 'N/A',
    TotalRating: 'N/A',
    UVRating: 'N/A',
    VisibilityRating: 'N/A',
    WindRating: 'N/A',
    WeatherData: {
      Cloudiness: 'N/A',
      Humidity: 'N/A',
      Max_Temperature: 'N/A',
      Min_Temperature: 'N/A',
      Presssure: 'N/A',
      Temperature: 'N/A',
      TimeLocation: {
        Location: {
          Latitude: 45.8157778,
          Longitude: 16.0091944
        },
        Time: new Date().toISOString()
      },
      UVIndex: 'N/A',
      Units: 'metric',
      Visibility: 'N/A',
      Weather: 'N/A',
      WeatherDescription: 'N/A',
      WeatherID: 'N/A',
      WindDirection: 'N/A',
      WindSpeed: 'N/A'
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
