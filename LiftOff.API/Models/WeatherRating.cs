using MoreLinq;
using System.Collections.Generic;

namespace LiftOff.API.Models
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

    public class AdvisoryRating
    {
        public string Croatian { get; set; } = "";
        public string English { get; set; } = "";

        public int Lenght()
        {
            return (new List<string>() { Croatian, English }).MaxBy(str => str.Length).Length; 
        }

        public void Append(AdvisoryRating advisoryRating)
        {
            Croatian += ((Croatian != "") ? ". " : "") + advisoryRating.Croatian;
            English += ((English != "") ? ". " : "") + advisoryRating.English;
        }
    }
}