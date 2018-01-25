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
            var weatherRating = new WeatherRating()
            {
                weatherData = weatherData,
                WindRating = _rateWind(weatherData.WindSpeed, weatherData.WindDirection),
                ConditionsRating = _rateConditions(weatherData.WeatherID, weatherData.Weather, weatherData.WeatherDescription),
                VisibilityRating = _rateVisibility(weatherData.Visibility, weatherData.Cloudiness),
                TemperatureRating = _rateTemperature(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
                AtmosphereRating = _rateAtmosphere(weatherData.Humidity, weatherData.Presssure),
                UVRating = _rateUV(weatherData.UVIndex)
            };

            weatherRating.TotalRating = _rateTotal(weatherRating);
            weatherRating.AdvisoryRating = _getAdvisoryRating(weatherRating);

            return weatherRating;
        }

        private static double? _rateWind(double? windSpeed, double? windDirection)
        {
            if (windSpeed == null) return null;

            var score = 5.174242 - 0.1529221 * (double)windSpeed - 0.00002164502 * Math.Pow((double)windSpeed, 2);

            return Clamp(score, 0, 5);

        }

        private static double? _rateConditions(int? weatherID, string weather, string weatherDescription)
        {
            if (weatherID == null) return null;

            Dictionary<int, double> WeatherIdToRating = new Dictionary<int, double>()
            {
                { 200, 0.7 }, { 201, 0.3 }, { 202, 0.0 }, { 210, 1.3 }, { 211, 0.2 }, { 212, 0.0 }, { 221, 0.0 }, { 230, 1.1 }, { 231, 0.5 }, { 232, 0 },
                { 300, 2.7 }, { 301, 2.2 }, { 302, 1.3 }, { 310, 1.0 }, { 311, 0.8 }, { 312, 0.5 }, { 314, 0.3 }, { 321, 0.2 },
                { 500, 1.8 }, { 501, 1.2 }, { 502, 0.7 }, { 503, 0.5 }, { 504, 0.2 }, { 511, 1.3 }, { 520, 0.6 }, { 522, 0.1 }, { 531, 0.0 },
                { 600, 3.1 }, { 601, 2.7 }, { 602, 1.7 }, { 611, 1.6 }, { 612, 1.3 }, { 615, 1.4 }, { 616, 0.8 }, { 620, 1.3 }, { 621, 0.4 }, { 622, 0.2 },
                { 701, 3.9 }, { 711, 3.7 }, { 721, 3.1 }, { 731, 2.4 }, { 741, 2.8 }, { 751, 2.1 }, { 761, 2.4 }, { 762, 1.9 }, { 771, 1.2 }, { 781, 0.0 },
                { 800, 5.0 }, { 801, 4.9 }, { 802, 4.8 }, { 803, 4.6 }, { 804, 3.9 },
                { 900, 0.0 }, { 901, 0.0 }, { 902, 0.0 }, { 903, 3.1 }, { 904, 3.5 }, { 906, 0.0 },
                { 951, 5.0 }, { 952, 4.7 }, { 953, 4.1 }, { 954, 3.5 }, { 955, 3.2 }, { 956, 2.8 }, { 957, 2.4 }, { 958, 2.1 }, { 959, 1.3 }, { 960, 0.7 }, { 961, 0.4 }, { 962, 0 }
            };

            double? score = WeatherIdToRating[(int)weatherID];

            return Clamp((double)score, 0, 5);
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

            var score = 5 + 0.005833333 * (double)humidity - 0.000475 * Math.Pow((double)humidity, 2) - 8.333333e-7 * Math.Pow((double)humidity, 3);

            return Clamp(score, 0, 5); ;
        }

        private static double? _rateUV(double? uVIndex)
        {
            if (uVIndex == null) return null;

            var score = 5.110701 - 0.475967 * (double)uVIndex + 0.008266248 * Math.Pow((double)uVIndex, 2);

            return score;
        }

        private static double? _rateTotal(WeatherRating weatherRating)
        {
            double? windRating = weatherRating.WindRating;
            double? conditionsRating = weatherRating.ConditionsRating;
            double? visibilityRating = weatherRating.VisibilityRating;
            double? temperatureRating = weatherRating.TemperatureRating;
            double? atmosphereRating = weatherRating.AtmosphereRating;
            double? uvRating = weatherRating.UVRating;

            double? windCoefficient = (windRating != null) ? 50 - 36.75 * (double)windRating + 11.375 * Math.Pow((double)windRating, 2) - 1.75 * Math.Pow((double)windRating, 3) + 0.125 * Math.Pow((double)windRating, 4) : (double?)null;
            double? conditionsCoefficient = (conditionsRating != null) ? 50 - 28.35 * (double)conditionsRating + 5.275 * Math.Pow((double)conditionsRating, 2) - 0.35 * Math.Pow((double)conditionsRating, 3) + 0.025 * Math.Pow((double)conditionsRating, 4) : (double?)null;
            double? visibilityCoefficient = (visibilityRating != null) ? 51 - 42.23333 * (double)visibilityRating + 15.01667 * Math.Pow((double)visibilityRating, 2) - 2.566667 * Math.Pow((double)visibilityRating, 3) + 0.1833333 * Math.Pow((double)visibilityRating, 4) : (double?)null;
            double? temperatureCoefficient = (temperatureRating != null) ? 20 - 0.5 * (double)temperatureRating - 6.333333 * Math.Pow((double)temperatureRating, 2) + 2 * Math.Pow((double)temperatureRating, 3) - 0.1666667 * Math.Pow((double)temperatureRating, 4) : (double?)null;
            double? atmosphereCoefficient = (atmosphereRating != null) ? 10 - 5.733333 * (double)atmosphereRating + 0.5333333 * Math.Pow((double)atmosphereRating, 2) + 0.2333333 * Math.Pow((double)atmosphereRating, 3) - 0.03333333 * Math.Pow((double)atmosphereRating, 4) : (double?)null;
            double? uvCoefficient = (uvRating != null) ? 15 - 2.483333 * (double)uvRating - 3.191667 * Math.Pow((double)uvRating, 2) + 1.183333 * Math.Pow((double)uvRating, 3) - 0.1083333 * Math.Pow((double)uvRating, 4) : (double?)null;

            double totalRating = (
                  (windCoefficient ?? 0) * ((windRating.HasValue) ? (double)windRating : 0)
                + (conditionsCoefficient ?? 0) * ((conditionsRating.HasValue) ? (double)conditionsRating : 0)
                + (visibilityCoefficient ?? 0) * ((visibilityRating.HasValue) ? (double)visibilityRating : 0)
                + (temperatureCoefficient ?? 0) * ((temperatureRating.HasValue) ? (double)temperatureRating : 0)
                + (atmosphereCoefficient ?? 0) * ((atmosphereRating.HasValue) ? (double)atmosphereRating : 0)
                + (uvCoefficient ?? 0) * ((uvRating.HasValue) ? (double)uvRating : 0)
                )
                    / ((windCoefficient ?? 0) + (conditionsCoefficient ?? 0) + (visibilityCoefficient ?? 0) + (temperatureCoefficient ?? 0) + (atmosphereCoefficient ?? 0) + (uvCoefficient ?? 0));

            return totalRating;
        }

        private static double? Clamp(double val, double min, double max) => (val < min) ? min : ((val > max) ? max : val);

        private enum RatingCategories { total, wind, conditions, visibility, temperatureLow, temperatureHigh, atmosphere, uv }
        private enum RatingStates { red, yellow, green, NA }
        private struct RatingCategoryState : IEquatable<RatingCategoryState>
        {
            public RatingCategories Category { get; set; }
            public RatingStates State { get; set; }

            public bool Equals(RatingCategoryState obj)
            {
                return Category == obj.Category && State == obj.State;
            }
        }

        private static AdvisoryRating _getAdvisoryRating(WeatherRating weatherRating)
        {
            AdvisoryRating advisoryRating = new AdvisoryRating();
            List<RatingCategoryState> RatingCategoryStates = RatingCategoryStatesFromWeatherRating(weatherRating);

            foreach (KeyValuePair<RatingCategoryState, AdvisoryRating> KeyValue in RatingCategoryStateToAdvisoryRating)
                if (RatingCategoryStates.Any(RGS => RGS.Equals(KeyValue.Key)) && advisoryRating.Lenght() < LogicConstants.MaxAdvisoryStringLenght)
                    advisoryRating.Append(KeyValue.Value);

            return advisoryRating;
        }

        private static List<RatingCategoryState> RatingCategoryStatesFromWeatherRating(WeatherRating weatherRating)
        {
            List<RatingCategoryState> RatingCategoryStates = new List<RatingCategoryState>();

            foreach(RatingCategories ratingCategory in Enum.GetValues(typeof(RatingCategories)))
                RatingCategoryStates.Add(new RatingCategoryState() {
                    Category = ratingCategory,
                    State = ScoreToRatingState(GetPropertyFromWeatherRating(weatherRating, ratingCategory))
                });

            return RatingCategoryStates;
        }

        private static Dictionary<RatingCategoryState, AdvisoryRating> RatingCategoryStateToAdvisoryRating = new Dictionary<RatingCategoryState, AdvisoryRating>()
        {
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.green },  new AdvisoryRating(){ English = "Ideal for flight",            Croatian = "Idealno za let"} },
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.yellow }, new AdvisoryRating(){ English = "Situation not ideal",         Croatian = "Situacija nije idealna"} },
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.red }, new AdvisoryRating(){ English = "Flight not advised",          Croatian = "Let se ne preporučuje"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.red },    new AdvisoryRating(){ English = "Wind's too strong",           Croatian = "Vjetar je prejak"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.red },    new AdvisoryRating(){ English = "Weather prevents flight",     Croatian = "Vrijeme sprječava let"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.red },    new AdvisoryRating(){ English = "Visibility too poor",         Croatian = "Vidljivost je preslaba"} },
            {new RatingCategoryState(){ Category = RatingCategories.temperatureHigh, State = RatingStates.red },    new AdvisoryRating(){ English = "Hight temp hinders motors",   Croatian = "Visoka temperatura škodi motorima"} },
            {new RatingCategoryState(){ Category = RatingCategories.temperatureLow,  State = RatingStates.red },    new AdvisoryRating(){ English = "Low temp hinders battery",    Croatian = "Niska temperatura škodi bateriji"} },
            {new RatingCategoryState(){ Category = RatingCategories.atmosphere,      State = RatingStates.red },    new AdvisoryRating(){ English = "High humidity damages drone", Croatian = "Vlaga šteti dronu"} },
            {new RatingCategoryState(){ Category = RatingCategories.uv,              State = RatingStates.red },    new AdvisoryRating(){ English = "Possible UV interference",    Croatian = "Moguća UV interferencija"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.yellow }, new AdvisoryRating(){ English = "Watch out for gusts of wind", Croatian = "Pazite na nalete vjetra"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.yellow }, new AdvisoryRating(){ English = "Weather's bad",               Croatian = "Vrijeme je loše"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.yellow }, new AdvisoryRating(){ English = "Impaired visibility",         Croatian = "Smanjena vidljivost"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.green },  new AdvisoryRating(){ English = "Wind's calm",                 Croatian = "Vjetar je miran"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.green },  new AdvisoryRating(){ English = "Weather's great",             Croatian = "Vrijeme je super"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.green },  new AdvisoryRating(){ English = "Great visiblity",             Croatian = "Odlična vidljivost"} },
        };

        private static RatingStates ScoreToRatingState(double? score)
        {
            if (!score.HasValue) return RatingStates.NA;

            var s = (double)score;
            return (s < 2) ? RatingStates.red : (s < 4) ? RatingStates.yellow : RatingStates.green;
        }

        private static double? GetPropertyFromWeatherRating(WeatherRating weatherRating, RatingCategories ratingCategory) 
        {
            switch (ratingCategory)
            {
                case RatingCategories.atmosphere:
                    return weatherRating.AtmosphereRating;
                case RatingCategories.conditions:
                    return weatherRating.ConditionsRating;
                case RatingCategories.temperatureHigh:
                    return (weatherRating.weatherData.Temperature > 20) ? weatherRating.TemperatureRating : null;
                case RatingCategories.temperatureLow:
                    return (weatherRating.weatherData.Temperature < 20) ? weatherRating.TemperatureRating : null;
                case RatingCategories.total:
                    return weatherRating.TotalRating;
                case RatingCategories.uv:
                    return weatherRating.UVRating;
                case RatingCategories.visibility:
                    return weatherRating.VisibilityRating;
                case RatingCategories.wind:
                    return weatherRating.WindRating;
                default:
                    return null;
            }
        }
    }
}