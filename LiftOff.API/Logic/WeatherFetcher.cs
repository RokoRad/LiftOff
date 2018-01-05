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
	public class WeatherFetcher
	{
		public static readonly WeatherFetcher Instance = new WeatherFetcher();

        public WeatherFetcher()
        {
            _startRefresher();
        }


        private List<TLEntity> _TLEntities { get; set; } = new List<TLEntity>();
		private List<WeatherData> _weatherData { get; set; } = new List<WeatherData>();
		private OpenWeatherAPI _openWeatherApi = new OpenWeatherAPI();


        private void _refresh()
        {
            //debug
            System.Diagnostics.Debug.WriteLine("refreshing data");

            List<WeatherData> NewWeatherData = new List<WeatherData>();

            _getNextNEntities().ForEach(TLE => {
                NewWeatherData.Add(_openWeatherApi.GetWeatherDataFromApi(TLE.TimeLocation));
                TLE.LastRefresh = DateTime.Now;
            });

            for (int i = 0; i < _weatherData.Count(); i++)
                for (int j = 0; j < NewWeatherData.Count(); j++)
                    if (_weatherData[i].TimeLocation.Equals(NewWeatherData[j].TimeLocation))
                        _weatherData[i] = NewWeatherData[j];
        }

        private void _clearUnusedWeatherData()
        {
            _weatherData.ToList().ForEach(WR => { if (!_TLEntities.Any(TLE => TLE.TimeLocation.Equals(WR.TimeLocation))) _weatherData.Remove(WR); });
        }

        private List<TLEntity> _getNextNEntities()
        {
            return _TLEntities.OrderBy(TLE => TLE.LastRefresh).Take(LogicConstants.NumberOfEntitesPerFetch).ToList();
        }

        private void _startRefresher()
        {
            var startTimeSpan = TimeSpan.Zero;
            var periodTimeSpan = TimeSpan.FromMinutes(1.2);

            var timer = new System.Threading.Timer((e) =>
            {
                _refresh();
            }, null, startTimeSpan, periodTimeSpan);
        }


        public void AddTimeLocationToTrack(TimeLocation timeLocation)
        {
            if (!_TLEntities.Any(TLE => TLE.TimeLocation.Equals(timeLocation)))
            {
                _TLEntities.Add(new TLEntity { TimeLocation = timeLocation, LastRefresh = new DateTime() });
                _weatherData.Add(_openWeatherApi.GetWeatherDataFromApi(timeLocation));
            }
        }

        public void RemoveTimeLocationFromTracking(TimeLocation timeLocation)
        {
            _TLEntities.Remove(_TLEntities.Single(TLE => TLE.TimeLocation.Equals(timeLocation)));
        }

        public WeatherData GetStoredWeatherData(TimeLocation timeLocation)
        {
            return _weatherData.First(WR => WR.TimeLocation.Equals(timeLocation));
        }

        public WeatherRating getConditionsRating(WeatherData weatherData)
        {
            return FlySafe.RateWeather(weatherData);
        }

        public WeatherRating GetConditionsRating(TimeLocation timeLocation)
        {
            return getConditionsRating(GetStoredWeatherData(timeLocation));
        }
    }

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
}