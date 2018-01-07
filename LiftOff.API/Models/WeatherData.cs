using LiftOff.API.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;

namespace LiftOff.API.Models
{
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

	public class TimeLocation
	{
		public Coordinates Location { get; set; }
		public DateTime Time { get; set; }

		public bool IsForecast()
		{
            return (DateTime.Now - Time).Duration() > LogicConstants.TimeTolerance;
		}

		public bool Equals(TimeLocation timeLocation)
		{
			var sameLocation = Math.Abs(timeLocation.Location.Latitude - Location.Latitude) < LogicConstants.LatitudeLongitudeTolerance && Math.Abs(timeLocation.Location.Longitude - Location.Longitude) < LogicConstants.LatitudeLongitudeTolerance;
			var sameTime = (timeLocation.Time - Time).Duration() < LogicConstants.TimeTolerance;
			return sameLocation && sameTime;
		}

        public bool EqualsByLocation(Coordinates coordinates)
        {
            return Math.Abs(coordinates.Latitude - Location.Latitude) < LogicConstants.LatitudeLongitudeTolerance && Math.Abs(coordinates.Longitude - Location.Longitude) < LogicConstants.LatitudeLongitudeTolerance;
        }

        public bool EqualsByTime(DateTime time)
        {
            return (time - Time).Duration() < LogicConstants.TimeTolerance;
        }

        public bool TimeIsValid()
        {
            return
                ((DateTime.Now - Time) <= LogicConstants.TimeTolerance) &&
                ((Time - DateTime.Now) <= TimeSpan.FromDays(5));

        }

        public bool LocationIsValid()
        {
            return
                Math.Abs(Location.Latitude) < 90 &&
                Math.Abs(Location.Longitude) < 180;
        }
	}

	public struct Coordinates
	{
		public double Latitude;
		public double Longitude;
	}
}