const initialState = {
  home: {
    AdvisoryRating: {
      Croatian: "Učitavanje podatka..",
      English: "Fetching data.."
    },  
    AtmosphereRating: null,
    ConditionsRating: null,
    TemperatureRating: null,
    TotalRating: null,
    UVRating: null,
    VisibilityRating: null,
    WindRating: null,
    weatherData: {
      Cloudiness: null,
      Humidity: null,
      Max_Temperature: null,
      Min_Temperature: null,
      Presssure: null,
      Temperature: null,
      TimeLocation: {
        Location: {
          Latitude: null,
          Longitude: null,
        },
        Time: null
      },
      UVIndex: null,
      Units: null,
      Visibility: null,
      Weather: null,
      WeatherDescription: null,
      WeatherID: null,
      WindDirection: null,
      WindSpeed: null
    }
  }
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_DATA':
      return  {
        home: {
          ...action.payload
        }
      };
      default:
          return state;
  }
};


export default homeReducer;