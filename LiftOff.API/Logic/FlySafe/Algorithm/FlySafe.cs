using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.FlySafe.Algorithm
{
    public class FlySafeAlgorithm
    {
        public static WeatherRating RateWeather(WeatherData weatherData, Drone drone)
        {

            WeatherRating weatherRating = new WeatherRating()
            {
                WeatherData = weatherData,
                Drone = drone ?? new Drone { TopSpeed = LogicParameters.BaseWindSpeed },

                WindRating        = _rateWind(weatherData.WindSpeed, weatherData.WindDirection, drone),
                ConditionsRating  = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription),
                VisibilityRating  = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness),
                TemperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
                AtmosphereRating  = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure),
                UVRating          = _rateUV(weatherData.UVIndex),
            };

            weatherRating.TotalRating    = _rateTotal(weatherRating);
            weatherRating.AdvisoryRating = _getAdvisoryRating(weatherRating);

            return weatherRating;
        }

        private static double? _rateWind(double? windSpeed, double? windDirection, Drone drone)
        {
            double? windScore = LOMath.QuarticRegression(windSpeed, LogicParameters.WindScoreCoefficients);
            double? adjustedWindScore = (windScore.HasValue) ? windScore * (drone.TopSpeed / LogicParameters.BaseWindSpeed) : null;

            return LOMath.ClampScore(adjustedWindScore);
        }

        private static double? _rateConditions(int? weatherID, string weather, string weatherDescription)
        {
            double? conditionsScore = LogicParameters.WeatherIdToRating[(int)weatherID];

            return LOMath.ClampScore(conditionsScore);
        }

        private static double? _rateVisibility(double? visibility, double? cloudiness)
        {
            double? visibilityScore = LOMath.QuarticRegression(visibility, LogicParameters.VisibilityScoreCoefficients);

            return LOMath.ClampScore(visibilityScore);
        }

        private static double? _rateTemperature(double? temperature, double? maxTemperature, double? minTemperature)
        {
            double? temperatureScore = LOMath.QuarticRegression(temperature, LogicParameters.TemperatureScoreCoefficients);

            return LOMath.ClampScore(temperature);
        }

        private static double? _rateAtmosphere(double? humidity, double? pressure)
        {
            double? atmosphereScore = LOMath.QuarticRegression(humidity, LogicParameters.AtmosphereScoreCoefficients);

            return LOMath.ClampScore(atmosphereScore);
        }

        private static double? _rateUV(double? uVIndex)
        {
            double? uvScore = LOMath.QuarticRegression(uVIndex, LogicParameters.UVScoreCoefficients);

            return LOMath.ClampScore(uvScore);
        }

        private static double? _rateTotal(WeatherRating weatherRating)
        {
            double? windWeight        = LOMath.QuarticRegression(weatherRating.WindRating,        LogicParameters.WindWeightCoefficients);
            double? conditionsWeight  = LOMath.QuarticRegression(weatherRating.ConditionsRating,  LogicParameters.ConditionsWeightCoefficients);
            double? visibilityWeight  = LOMath.QuarticRegression(weatherRating.VisibilityRating,  LogicParameters.VisibilityWeightCoefficients);
            double? temperatureWeight = LOMath.QuarticRegression(weatherRating.TemperatureRating, LogicParameters.TemperatureWeightCoefficients);
            double? atmosphereWeight  = LOMath.QuarticRegression(weatherRating.AtmosphereRating,  LogicParameters.AtmosphereWeightCoefficients);
            double? uvWeight          = LOMath.QuarticRegression(weatherRating.UVRating,          LogicParameters.UVWeightCoefficients);

            double?[] parameters = new double?[] { weatherRating.WindRating,
                                                   weatherRating.ConditionsRating,
                                                   weatherRating.VisibilityRating,
                                                   weatherRating.TemperatureRating,
                                                   weatherRating.AtmosphereRating,
                                                   weatherRating.UVRating};

            double?[] weights = new double?[] { windWeight,
                                                conditionsWeight,
                                                visibilityWeight,
                                                temperatureWeight,
                                                atmosphereWeight,
                                                uvWeight };

            return LOMath.WeightedAverage(parameters, weights);
        }

        private static AdvisoryRating _getAdvisoryRating(WeatherRating weatherRating)
        {
            AdvisoryRating advisoryRating = new AdvisoryRating();
            List<RatingCategoryState> ratingCategoryStates = _ratingCategoryStatesFromWeatherRating(weatherRating);

            foreach (KeyValuePair<RatingCategoryState, AdvisoryRating> KeyValue in LogicParameters.RatingCategoryStateToAdvisoryRating)
                if (ratingCategoryStates.Any(RGS => RGS.Equals(KeyValue.Key)) && advisoryRating.Lenght() < LogicParameters.MaxAdvisoryStringLenght)
                    advisoryRating.Append(KeyValue.Value);

            return advisoryRating;
        }

        private static List<RatingCategoryState> _ratingCategoryStatesFromWeatherRating(WeatherRating weatherRating)
        {
            List<RatingCategoryState> RatingCategoryStates = new List<RatingCategoryState>();

            foreach(RatingCategories ratingCategory in Enum.GetValues(typeof(RatingCategories)))
                RatingCategoryStates.Add(new RatingCategoryState() {
                    Category = ratingCategory,
                    State = _scoreToRatingState(weatherRating.GetProperty(ratingCategory))
                });

            return RatingCategoryStates;
        }

        private static RatingStates _scoreToRatingState(double? score)
        {
            if (!score.HasValue) return RatingStates.NA;

            double s = (double)score;
            return (s < LogicParameters.YellowScoreStateLimit) ? RatingStates.red : (s < LogicParameters.GreenScoreStateLimit) ? RatingStates.yellow : RatingStates.green;
        }
    }
}