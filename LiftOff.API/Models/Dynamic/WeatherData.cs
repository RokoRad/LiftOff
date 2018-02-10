using LiftOff.API.Logic;
using System;

namespace LiftOff.API.Models.Dynamic
{
    //Model vremenskih podataka
	public class WeatherData
	{
		public TimeLocation TimeLocation { get; set; }

		public double? Humidity { get; set; }
		public double? Presssure { get; set; }
		public double? Temperature { get; set; }
		public double? Max_Temperature { get; set; }
		public double? Min_Temperature { get; set; }
		public double? Visibility { get; set; }
		public double? Cloudiness { get; set; }
		public double? UVIndex { get; set; }
		public double? WindSpeed { get; set; }
		public double? WindDirection { get; set; }
		public int?    WeatherID { get; set; }
		public string  Weather { get; set; }
		public string  WeatherDescription { get; set; }
        public string  City { get; set; }

        public string Units { get; set; } = "metric";

        public bool Equals(WeatherData weatherData)
        {
            return TimeLocation.Equals(weatherData.TimeLocation)
                && Humidity == weatherData.Humidity
                && Presssure == weatherData.Presssure
                && Temperature == weatherData.Temperature
                && Max_Temperature == weatherData.Max_Temperature
                && Min_Temperature == weatherData.Min_Temperature
                && Visibility == weatherData.Visibility
                && Cloudiness == weatherData.Cloudiness
                && UVIndex == weatherData.UVIndex
                && WindSpeed == weatherData.WindSpeed
                && WindDirection == weatherData.WindDirection
                && WeatherID == weatherData.WeatherID
                && Weather == weatherData.Weather
                && WeatherDescription == weatherData.WeatherDescription;
        }
    }
}