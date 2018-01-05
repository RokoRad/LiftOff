﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
	public class WeatherRating
	{
		public double ConditionsRating { get; set; }
		public double WindRating { get; set; }
		public double TemperatureRating { get; set; }
		public double HumidityRating { get; set; }
		public double VisibilityRating { get; set; }
		public double UVRating { get; set; }

		public WeatherData weatherData { get; set; }
	}
}