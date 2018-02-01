import storage from '../functions/storage';
import store from '../store';

const initialState = {
  // units: 'metric',
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
    weatherData: {
      Cloudiness: 'N/A',
      Humidity: 'N/A',
      Max_Temperature: 'N/A',
      Min_Temperature: 'N/A',
      Presssure: 'N/A',
      Temperature: 'N/A',
      TimeLocation: {
        Location: {
          Latitude: 43.508133,
          Longitude: 16.440193
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

const cached = storage.get('@realtime');

if (cached) {
  initialState.home = JSON.parse(cached);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HOME':
      return {
        ...state,
        home: {
          ...action.payload
        }
      };
    // case 'CHANGE_UNITS':
    //   return {
    //     ...state,
    //     units: action.payload
    //     };
    default:
      return state;
  }
};
