export default (object) => {
  return {
    AdvisoryRating: {
      Croatian: object.advisoryRating.croatian,
      English: object.advisoryRating.english
    },
    AtmosphereRating: object.atmosphereRating,
    ConditionsRating: object.conditionsRating,
    TemperatureRating: object.temperatureRating,
    TotalRating: object.totalRating,
    UVRating: object.uvRating,
    VisibilityRating: object.visibilityRating,
    WindRating: object.windRating,
    weatherData: {
      Cloudiness: object.cloudiness,
      Humidity: object.humidity,
      Max_Temperature: object.max_Temperature,
      Min_Temperature: object.min_Temperature,
      Presssure: object.pressure,
      Temperature: object.temperature,
      timeLocation: {
        Location: {
          Latitude: object.weatherData.timeLocation.location.latitude,
          Longitude: object.weatherData.timeLocation.location.longitude
        },
        Time: object.weatherData.timeLocation.time
      },
      UVIndex: object.uvIndex,
      Units: object.units,
      Visibility: object.visibility,
      Weather: object.weather,
      WeatherDescription: object.weatherDescription,
      WeatherID: object.weatherID,
      WindDirection: object.windDirection,
      WindSpeed: object.windSpeed
    }
  }
}