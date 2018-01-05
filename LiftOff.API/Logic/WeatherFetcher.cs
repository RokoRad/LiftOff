using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;
using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace LiftOff.API.Logic
{
	public static class LogicConstants
	{
		public static int NumberOfEntitesPerFetch = 40;
		public static double LatitudeLongitudeTolerance = 0.1;
		public static TimeSpan TimeTolerance = TimeSpan.FromHours(1);
	}

	public class TLEntity
	{
		public TimeLocation TimeLocation { get; set; }
		public DateTime LastRefresh { get; set; }
	}

	public class WeatherFetcher
	{
		public static WeatherFetcher Instance = new WeatherFetcher();

		public List<TLEntity> TLEntities { get; set; } = new List<TLEntity>();
		public List<WeatherData> WeatherData { get; set; } = new List<WeatherData>();
		private OpenWeatherAPI _openWeatherApi = new OpenWeatherAPI();

		public WeatherFetcher()
		{
			StartRefresher();
		}

		public DateTime LastRefresh = new DateTime();

		public void AddTimeLocationToTrack(TimeLocation timeLocation)
		{
			if (!TLEntities.Any(TLE => TLE.TimeLocation.Equals(timeLocation)))
			{
				TLEntities.Add(new TLEntity { TimeLocation = timeLocation, LastRefresh = new DateTime() });
				WeatherData.Add(_openWeatherApi.GetWeatherDataFromApi(timeLocation));
			}
		}

		public List<TLEntity> GetNextNEntities()
		{
			return TLEntities.OrderBy(TLE => TLE.LastRefresh).Take(LogicConstants.NumberOfEntitesPerFetch).ToList();
		}

		public void Refresh()
		{
			//debug
			System.Diagnostics.Debug.WriteLine("refreshing data");

			List<WeatherData> NewWeatherData = new List<WeatherData>();

			GetNextNEntities().ForEach(TLE => {
				NewWeatherData.Add(_openWeatherApi.GetWeatherDataFromApi(TLE.TimeLocation));
				TLE.LastRefresh = DateTime.Now;
			});

			for (int i = 0; i < WeatherData.Count(); i++)
			for (int j = 0; j < NewWeatherData.Count(); j++)
				if (WeatherData[i].TimeLocation.Equals(NewWeatherData[j].TimeLocation))
					WeatherData[i] = NewWeatherData[j];

			LastRefresh = DateTime.Now;
		}

		public WeatherData GetStoredWeatherData(TimeLocation timeLocation)
		{
			return WeatherData.First(WR => WR.TimeLocation.Equals(timeLocation));
		}

		public void ClearUnusedWeatherData()
		{
			WeatherData.ToList().ForEach(WR => { if (!TLEntities.Any(TLE => TLE.TimeLocation.Equals(WR.TimeLocation))) WeatherData.Remove(WR); });
		}

		public void StartRefresher()
		{
			var startTimeSpan = TimeSpan.Zero;
			var periodTimeSpan = TimeSpan.FromMinutes(1.2);

			var timer = new System.Threading.Timer((e) =>
			{
				Refresh();
			}, null, startTimeSpan, periodTimeSpan);
		}

		public OldWeatherRating getConditionsRating(WeatherData weatherData)
		{
			return new OldWeatherRating
			(
				new WindRating(weatherData.WindSpeed, weatherData.WindDirection),
				new ConditionsRating(weatherData.WeatherID, weatherData.Weather, weatherData.Description),
				new VisibilityRating(weatherData.Cloudiness, weatherData.Visibility),
				new TemperatureRating(weatherData.Temperature, weatherData.Max_Temperature, weatherData.Min_Temperature),
				new AtmosphereRating(weatherData.Humidity, weatherData.Presssure),
				new UVRating(weatherData.UVIndex)
			);
		}
	}


}