using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
	public class WeatherRating
	{
        public double TotalRating { get; set; }

		public double ConditionsRating { get; set; }
		public double WindRating { get; set; }
		public double TemperatureRating { get; set; }
		public double AtmosphereRating { get; set; }
		public double VisibilityRating { get; set; }
		public double UVRating { get; set; }

		public WeatherData weatherData { get; set; }

        public bool Equals(WeatherRating weatherRating)
        {
            return TotalRating == weatherRating.TotalRating
                && ConditionsRating == weatherRating.ConditionsRating
                && WindRating == weatherRating.WindRating
                && TemperatureRating == weatherRating.TemperatureRating
                && AtmosphereRating == weatherRating.AtmosphereRating
                && VisibilityRating == weatherRating.VisibilityRating
                && UVRating == weatherRating.UVRating
                && weatherData.Equals(weatherRating.weatherData);
        }
    }
}