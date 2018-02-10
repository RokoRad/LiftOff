using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.FlySafe.Algorithm
{
    //Klasa koja sadržava FlySafe algoritam koji pretvara podatke o vremenu u prikladnu analizu
    public class FlySafeAlgorithm
    {
        //Metoda koja generira procjenu na temelju vremenskih podataka i drona
        public static WeatherRating RateWeather(WeatherData weatherData, Drone drone)
        {
            //Za slučaj da odabrani dron nije među podrzanim, koriste se neke općeprimjenjive vrijednosti
            drone = drone ?? new Drone { TopSpeed = LogicParameters.BaseWindSpeed };

            WeatherRating weatherRating = new WeatherRating
            {
                WeatherData = weatherData,
                Drone = drone,

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

        //Generiranje ocjene komponente vjetra
        private static double? _rateWind(double? windSpeed, double? windDirection, Drone drone)
        {
            double? windScore = LOMath.QuarticRegression(windSpeed, LogicParameters.WindScoreCoefficients);
            double? adjustedWindScore = (windScore.HasValue) ? windScore * (drone.TopSpeed / LogicParameters.BaseWindSpeed) : null;

            return LOMath.ClampScore(adjustedWindScore);
        }

        //Generiranje ocjene komponente padalina
        private static double? _rateConditions(int? weatherID, string weather, string weatherDescription)
        {
            double? conditionsScore = LogicParameters.WeatherIdToRating[(int)weatherID];

            return LOMath.ClampScore(conditionsScore);
        }

        //Generiranje ocjene komponente vidljivosti
        private static double? _rateVisibility(double? visibility, double? cloudiness)
        {
            double? visibilityScore = LOMath.QuarticRegression(visibility, LogicParameters.VisibilityScoreCoefficients);

            return LOMath.ClampScore(visibilityScore);
        }

        //Generiranje ocjene komponente temperature
        private static double? _rateTemperature(double? temperature, double? maxTemperature, double? minTemperature)
        {
            double? temperatureScore = LOMath.QuarticRegression(temperature, LogicParameters.TemperatureScoreCoefficients);

            return LOMath.ClampScore(temperature);
        }

        //Generiranje ocjene komponente stanja atmosfere
        private static double? _rateAtmosphere(double? humidity, double? pressure)
        {
            double? atmosphereScore = LOMath.QuarticRegression(humidity, LogicParameters.AtmosphereScoreCoefficients);

            return LOMath.ClampScore(atmosphereScore);
        }

        //Generiranje ocjene komponente UV indeksa
        private static double? _rateUV(double? uVIndex)
        {
            double? uvScore = LOMath.QuarticRegression(uVIndex, LogicParameters.UVScoreCoefficients);

            return LOMath.ClampScore(uvScore);
        }

        //Generiranje ukupne ocjene
        private static double? _rateTotal(WeatherRating weatherRating)
        {
            //Izracunavanje tezinskih koeficijenata pojedinih komponenti za ponderiranu aritmeticku sredinu na temelju ocjene komponente
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

            //Racunanje ponderirane aritmeticke sredine
            return LOMath.ClampScore(LOMath.WeightedAverage(parameters, weights));
        }

        //Generiranje savjetujuceg teksta
        private static AdvisoryRating _getAdvisoryRating(WeatherRating weatherRating)
        {
            AdvisoryRating advisoryRating = new AdvisoryRating();

            //Pretvaranje ocjena komponenti u apstraktne opise stanja situacije
            List<RatingCategoryState> ratingCategoryStates = _ratingCategoryStatesFromWeatherRating(weatherRating);

            //Dohvacanje i spajanje tekstova koji odgovaraju opisu stanja situacije po prioritetu (s obzirom da je broj znakova ogranicen)
            foreach (KeyValuePair<RatingCategoryState, AdvisoryRating> KeyValue in LogicParameters.RatingCategoryStateToAdvisoryRating)
                if (ratingCategoryStates.Any(RGS => RGS.Equals(KeyValue.Key)) && advisoryRating.Lenght() < LogicParameters.MaxAdvisoryStringLenght)
                    advisoryRating.Append(KeyValue.Value);

            return advisoryRating;
        }

        //Pretvaranje ocjena komponenti u apstraktne opise stanja situacije
        private static List<RatingCategoryState> _ratingCategoryStatesFromWeatherRating(WeatherRating weatherRating)
        {
            List<RatingCategoryState> RatingCategoryStates = new List<RatingCategoryState>();

            //Pretvaranje stanja u apstraktne opisujuce modele 
            foreach(RatingCategories ratingCategory in Enum.GetValues(typeof(RatingCategories)))
                RatingCategoryStates.Add(new RatingCategoryState() {
                    Category = ratingCategory,
                    State = _scoreToRatingState(weatherRating.GetProperty(ratingCategory))
                });

            return RatingCategoryStates;
        }

        //Pretvaranje ocjene u odgovarajuce stanje (crveno, zuto, zeleno)
        private static RatingStates _scoreToRatingState(double? score)
        {
            if (!score.HasValue) return RatingStates.NA;

            double s = (double)score;
            return (s < LogicParameters.YellowScoreStateLimit) ? RatingStates.red : (s < LogicParameters.GreenScoreStateLimit) ? RatingStates.yellow : RatingStates.green;
        }
    }
}