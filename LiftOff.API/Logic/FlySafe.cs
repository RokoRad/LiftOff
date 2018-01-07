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
            double? windRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection);
            double? conditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription);
            double? visibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness);
            double? temperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature);
            double? atmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure);
            double? uvRating = _rateUV(weatherData.UVIndex);

            double? totalRating = _rateTotal(windRating, conditionsRating, visibilityRating, temperatureRating, atmosphereRating, uvRating);

            return new WeatherRating()
            {
                weatherData = weatherData,
                WindRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection),
                ConditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription),
                VisibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness),
                TemperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
                AtmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure),
                UVRating = _rateUV(weatherData.UVIndex),

                TotalRating = (double)totalRating
            };
        }

        private static double? _rateWind(double? windSpeed, double? windDirection)
        {
            if (windSpeed == null) return null;

            var score = 5.174242 - 0.1529221 * (double)windSpeed - 0.00002164502 * Math.Pow((double)windSpeed, 2);

            return Clamp(score, 0, 5);

        }

        //TODO
        private static double? _rateConditions(int? weatherID, string weather, string weatherDescription)
        {
            if (weatherID == null) return null;

            var score = 4.1;

            return Clamp(score, 0, 5);
        }

        private static double? _rateVisibility(double? visibility, double? cloudiness)
        {
            if (visibility == null) return null;

            var score = 5.03205 + (-0.08077214 - 5.03205) / (1 + Math.Pow((double)visibility / 1750.523, 2.638352));

            return Clamp(score, 0, 5);
        }

        private static double? _rateTemperature(double? temperature, double? maxTemperature, double? minTemperature)
        {
            if (temperature == null) return null;

            var score = -0.08571429 + 0.4571429 * (double)temperature - 0.01142857 * Math.Pow((double)temperature, 2);

            return Clamp(score, 0, 5);
        }

        private static double? _rateAtmosphere(double? humidity, double? pressure)
        {
            if (humidity == null) return null;

            var score = 5 + 0.005833333 * (double)humidity - 0.000475 * Math.Pow((double)humidity , 2) - 8.333333e-7 * Math.Pow((double)humidity, 3);

            return Clamp(score, 0, 5); ;
        }

        private static double? _rateUV(double? uVIndex)
        {
            if (uVIndex == null) return null;

            var score = 5.110701 - 0.475967 * (double)uVIndex + 0.008266248 * Math.Pow((double)uVIndex, 2);

            return score;
        }

        private static double? _rateTotal(double? windRating, double? conditionsRating, double? visibilityRating, double? temperatureRating, double? atmosphereRating, double? uvRating)
        {
            double? windCoefficient       = (windRating != null)        ? 50 - 36.75    * (double)windRating        + 11.375    * Math.Pow((double)windRating, 2)        - 1.75     * Math.Pow((double)windRating, 3)        + 0.125      * Math.Pow((double)windRating, 4)        : (double?) null;
            double? conditionsCoefficient = (conditionsRating != null)  ? 50 - 28.35    * (double)conditionsRating  + 5.275     * Math.Pow((double)conditionsRating, 2)  - 0.35     * Math.Pow((double)conditionsRating, 3)  + 0.025      * Math.Pow((double)conditionsRating, 4)  : (double?) null;
            double? visibilityCoefficient = (visibilityRating != null)  ? 51 - 42.23333 * (double)visibilityRating  + 15.01667  * Math.Pow((double)visibilityRating, 2)  - 2.566667 * Math.Pow((double)visibilityRating, 3)  + 0.1833333  * Math.Pow((double)visibilityRating, 4)  : (double?) null;
            double? temperatureCoefficient= (temperatureRating != null) ? 20 - 0.5      * (double)temperatureRating - 6.333333  * Math.Pow((double)temperatureRating, 2) + 2        * Math.Pow((double)temperatureRating, 3) - 0.1666667  * Math.Pow((double)temperatureRating, 4) : (double?) null;
            double? atmosphereCoefficient = (atmosphereRating != null)  ? 21 - 8.9      * (double)atmosphereRating  - 0.2333333 * Math.Pow((double)atmosphereRating, 2)  + 0.6      * Math.Pow((double)atmosphereRating, 3)  - 0.06666667 * Math.Pow((double)atmosphereRating, 4)  : (double?) null;
            double? uvCoefficient         = (uvRating != null)          ? 15 - 2.483333 * (double)uvRating          - 3.191667  * Math.Pow((double)uvRating, 2)          + 1.183333 * Math.Pow((double)uvRating, 3)          - 0.1083333  * Math.Pow((double)uvRating, 4)          : (double?) null;



            double totalRating = (
                  (windCoefficient         ?? 0) * ((windRating        .HasValue) ?(double)windRating        : 0)
                + (conditionsCoefficient   ?? 0) * ((conditionsRating  .HasValue) ?(double)conditionsRating  : 0)
                + (visibilityCoefficient   ?? 0) * ((visibilityRating  .HasValue) ?(double)visibilityRating  : 0)
                + (temperatureCoefficient  ?? 0) * ((temperatureRating .HasValue) ?(double)temperatureRating : 0)
                + (atmosphereCoefficient   ?? 0) * ((atmosphereRating  .HasValue) ?(double)atmosphereRating  : 0)
                + (uvCoefficient           ?? 0) * ((uvRating          .HasValue) ?(double)uvRating : 0         )
                ) 
                    / ((windCoefficient ?? 0) + (conditionsCoefficient ?? 0) + (visibilityCoefficient ?? 0) + (temperatureCoefficient ?? 0) + (atmosphereCoefficient ?? 0) + (uvCoefficient ?? 0));

            return totalRating;
        }

        private static double? Clamp(double val, double min, double max) => (val < min) ? min : ((val > max) ? max : val);
    }
}