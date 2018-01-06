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

        private static double _rateTotal(double windRating, double conditionsRating, double visibilityRating, double temperatureRating, double atmosphereRating, double uvRating)
        {
            double windCoefficient = 1000 - 1238.65 * windRating + 557.5583 * Math.Pow(windRating, 2) - 108.15 * Math.Pow(windRating, 3) + 7.641667 * Math.Pow(windRating, 4);
            double conditionsCoefficient = 1001 - 1191.533 * conditionsRating + 520.7167 * Math.Pow(conditionsRating, 2) - 98.86667 * Math.Pow(conditionsRating, 3) + 6.883333 * Math.Pow(conditionsRating, 4);
            double visibilityCoefficient = 1006 - 1246.35 * visibilityRating + 561.1083 * Math.Pow(visibilityRating, 2) - 108.85 * Math.Pow(visibilityRating, 3) + 7.691667 * Math.Pow(visibilityRating, 4);
            double temperatureCoefficient = 20 + 19.81667 * temperatureRating - 23.14167 * Math.Pow(temperatureRating, 2) + 6.483333 * Math.Pow(temperatureRating, 3) - 0.5583333 * Math.Pow(temperatureRating, 4);
            double atmosphereCoefficient = 30 - 8.016667 * atmosphereRating - 5.475 * Math.Pow(atmosphereRating, 2) + 2.316667 * Math.Pow(atmosphereRating, 3) - 0.225 * Math.Pow(atmosphereRating, 4);
            double uvCoefficient = 10 - 2.35 * uvRating - 1.641667 * Math.Pow(uvRating, 2) + 0.65 * Math.Pow(uvRating, 3) - 0.05833333 * Math.Pow(uvRating, 4);

            double totalRating = (windCoefficient * windRating + conditionsCoefficient * conditionsRating + visibilityCoefficient * visibilityRating + temperatureCoefficient * temperatureRating + atmosphereCoefficient * atmosphereRating + uvCoefficient * uvRating) / (windCoefficient + conditionsCoefficient + visibilityCoefficient + temperatureCoefficient + atmosphereCoefficient + uvCoefficient);

            return totalRating;
        }

        private static double Clamp(double val, double min, double max) => (val < min) ? min : ((val > max) ? max : val);
    }
}