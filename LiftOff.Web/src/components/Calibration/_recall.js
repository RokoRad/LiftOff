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
      Cloudiness: object.weatherData.cloudiness,
      Humidity: object.weatherData.humidity,
      Max_Temperature: object.weatherData.max_Temperature,
      Min_Temperature: object.weatherData.min_Temperature,
      Presssure: object.weatherData.pressure,
      Temperature: object.weatherData.temperature,
      timeLocation: {
        Location: {
          Latitude: object.weatherData.timeLocation.location.latitude,
          Longitude: object.weatherData.timeLocation.location.longitude
        },
        Time: object.weatherData.timeLocation.time
      },
      UVIndex: object.weatherData.uvIndex,
      Units: object.weatherData.units,
      Visibility: object.weatherData.visibility,
      Weather: object.weatherData.weather,
      WeatherDescription: object.weatherData.weatherDescription,
      WeatherID: object.weatherData.weatherID,
      WindDirection: object.weatherData.windDirection,
      WindSpeed: object.weatherData.windSpeed
    }
  }
}