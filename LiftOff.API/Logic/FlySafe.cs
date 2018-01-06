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
            double windRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection);
            double conditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription);
            double visibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness);
            double temperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature);
            double atmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure);
            double uvRating = _rateUV(weatherData.UVIndex);

            double totalRating = _rateTotal(windRating, conditionsRating, visibilityRating, temperatureRating, atmosphereRating, uvRating);

            return new WeatherRating()
            {
                weatherData = weatherData,
                WindRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection),
                ConditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription),
                VisibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness),
                TemperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
                AtmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure),
                UVRating = _rateUV(weatherData.UVIndex),

                TotalRating = totalRating
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
            var score = 5.03205 + (-0.08077214 - 5.03205) / (1 + Math.Pow(visibility / 1750.523, 2.638352));

            return Clamp(score, 0, 5);
        }

        private static double _rateTemperature(double temperature, double maxTemperature, double minTemperature)
        {
            var score = -0.08571429 + 0.4571429 * temperature - 0.01142857 * Math.Pow(temperature, 2);

            return Clamp(score, 0, 5);
        }

        private static double _rateAtmosphere(double humidity, double pressure)
        {
            var score = 5 + 0.005833333 * humidity - 0.000475 * Math.Pow( humidity , 2) - 8.333333e-7 * Math.Pow(humidity, 3);

            return Clamp(score, 0, 5); ;
        }

        private static double _rateUV(double uVIndex)
        {
            var score = 5.110701 - 0.475967 * uVIndex + 0.008266248 * Math.Pow(uVIndex, 2);

            return score;
        }

        private static double _rateTotal(double windRating, double conditionsRating, double visibilityRating, double temperatureRating, double atmosphereRating, double uvRating)
        {
            double windCoefficient       = 50 - 36.75 * windRating + 11.375 * Math.Pow(windRating, 2) - 1.75 * Math.Pow(windRating, 3) + 0.125 * Math.Pow(windRating, 4);
            double conditionsCoefficient = 50 - 28.35 * conditionsRating + 5.275 * Math.Pow(conditionsRating, 2) - 0.35 * Math.Pow(conditionsRating, 3) + 0.025 * Math.Pow(conditionsRating, 4);
            double visibilityCoefficient = 51 - 42.23333 * visibilityRating + 15.01667 * Math.Pow(visibilityRating, 2) - 2.566667 * Math.Pow(visibilityRating, 3) + 0.1833333 * Math.Pow(visibilityRating, 4);
            double temperatureCoefficient= 20 - 0.5 * temperatureRating - 6.333333 * Math.Pow(temperatureRating, 2) + 2 * Math.Pow(temperatureRating, 3) - 0.1666667 * Math.Pow(temperatureRating, 4);
            double atmosphereCoefficient = 21 - 8.9 * atmosphereRating - 0.2333333 * Math.Pow(atmosphereRating, 2) + 0.6 * Math.Pow(atmosphereRating, 3) - 0.06666667 * Math.Pow(atmosphereRating, 4);
            double uvCoefficient         = 15 - 2.483333 * uvRating - 3.191667 * Math.Pow(uvRating, 2) + 1.183333 * Math.Pow(uvRating, 3) - 0.1083333 * Math.Pow(uvRating, 4);

            double totalRating = (windCoefficient * windRating + conditionsCoefficient * conditionsRating + visibilityCoefficient * visibilityRating + temperatureCoefficient * temperatureRating + atmosphereCoefficient * atmosphereRating + uvCoefficient * uvRating) / (windCoefficient + conditionsCoefficient + visibilityCoefficient + temperatureCoefficient + atmosphereCoefficient + uvCoefficient);

            return totalRating;
        }

        private static double Clamp(double val, double min, double max) => (val < min) ? min : ((val > max) ? max : val);
    }
}