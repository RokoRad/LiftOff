using LiftOff.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic
{
    public class FlySafe
    {
        public static WeatherRating RateWeather(WeatherData weatherData)
        {
            return new WeatherRating()
            {
                weatherData = weatherData,
                WindRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection),
                ConditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription),
                VisibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness),
                TemperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
                AtmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure),
                UVRating = _rateUV(weatherData.UVIndex)
            };
        }

        private static double _rateWind(double windSpeed, double windDirection)
        {
            var score = 5.174242 - 0.1529221 * windSpeed - 0.00002164502 * Math.Pow(windSpeed, 2);

            return Clamp(score, 0, 5);

        }

        //TODO
        private static double _rateConditions(int weatherID, string weather, string weatherDescription)
        {
            var score = 4.1;

            return Clamp(score, 0, 5);
        }

        //TODO
        private static double _rateVisibility(double visibility, double cloudiness)
        {
            var score = 3.2;

            return Clamp(score, 0, 5);
        }

        private static double _rateTemperature(double temperature, double maxTemperature, double minTemperature)
        {
            var score = -0.08571429 + 0.4571429 * temperature - 0.01142857 * Math.Pow(temperature, 2);

            return Clamp(score, 0, 5);
        }

        private static double _rateAtmosphere(double humidity, double pressure)
        {
            var score = 5.030759 - 0.01800218 * humidity - 0.0003456611 * Math.Pow(humidity, 2);

            return Clamp(score, 0, 5); ;
        }

        private static double _rateUV(double uVIndex)
        {
            var score = 5.110701 - 0.475967 * uVIndex + 0.008266248 * Math.Pow(uVIndex, 2);

            return score;
        }

        private static double Clamp(double val, double min, double max) => (val < min) ? min : ((val > max) ? max : val);
    }
}