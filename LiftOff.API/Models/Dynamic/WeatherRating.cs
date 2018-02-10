using LiftOff.API.Logic;
using LiftOff.API.Logic.FlySafe.Algorithm;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using MoreLinq;
using System.Collections.Generic;

namespace LiftOff.API.Models.Dynamic
{
	public class WeatherRating
	{
        public double? TotalRating { get; set; }

        public AdvisoryRating AdvisoryRating { get; set; }

		public double? ConditionsRating { get; set; }
		public double? WindRating { get; set; }
		public double? TemperatureRating { get; set; }
		public double? AtmosphereRating { get; set; }
		public double? VisibilityRating { get; set; }
		public double? UVRating { get; set; }

		public WeatherData WeatherData { get; set; }
        public Drone Drone { get; set; }

        public bool Equals(WeatherRating weatherRating)
        {
            return TotalRating == weatherRating.TotalRating
                && ConditionsRating == weatherRating.ConditionsRating
                && WindRating == weatherRating.WindRating
                && TemperatureRating == weatherRating.TemperatureRating
                && AtmosphereRating == weatherRating.AtmosphereRating
                && VisibilityRating == weatherRating.VisibilityRating
                && UVRating == weatherRating.UVRating
                && WeatherData.Equals(weatherRating.WeatherData);
        }

        public double? GetProperty(RatingCategories ratingCategory)
        {
            switch (ratingCategory)
            {
                case RatingCategories.atmosphere:
                    return AtmosphereRating;
                case RatingCategories.conditions:
                    return ConditionsRating;
                case RatingCategories.temperatureHigh:
                    return (WeatherData.Temperature > LogicParameters.PivotTemperature) ? TemperatureRating : null;
                case RatingCategories.temperatureLow:
                    return (WeatherData.Temperature <= LogicParameters.PivotTemperature) ? TemperatureRating : null;
                case RatingCategories.total:
                    return TotalRating;
                case RatingCategories.uv:
                    return UVRating;
                case RatingCategories.visibility:
                    return VisibilityRating;
                case RatingCategories.wind:
                    return WindRating;
                default:
                    return null;
            }
        }
    }
}