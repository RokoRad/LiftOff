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
using LiftOff.API.Logic.FlySafe.Algorithm;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;

namespace LiftOff.API.Logic
{
    //Klasa za mehanizam osvjezavanja vremenskih podataka
	public class Weatherer
	{
        #region Singleton pattern

        private static Weatherer _instance;

        private Weatherer()
        {
            _startRefresher();
        }

        public static Weatherer Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new Weatherer();
                }
                return _instance;
            }
        }

        #endregion

        private List<TLEntity> _TLEntities { get; set; } = new List<TLEntity>();
		private List<WeatherData> _weatherData { get; set; } = new List<WeatherData>();
        private OpenWeatherAPI _openWeatherApi = new OpenWeatherAPI();

        //Dodaje mjesto-vrijeme da se prati u sustavu
        public void AddTimeLocationToTrack(TimeLocation timeLocation)
        {
            if (!_TLEntities.Any(TLE => TLE.TimeLocation.Equals(timeLocation)))
            {
                _TLEntities.Add(new TLEntity { TimeLocation = timeLocation, LastRefresh = new DateTime() });
                _weatherData.Add(_openWeatherApi.GetWeatherDataFromApi(timeLocation));
            }
        }

        //Uklanja mjesto-vrijeme sa pracenja 
        public void RemoveTimeLocationFromTracking(TimeLocation timeLocation)
        {
            _TLEntities.Remove(_TLEntities.Single(TLE => TLE.TimeLocation.Equals(timeLocation)));
        }

        //Ocjenjiva vremenske podatke
        public WeatherRating GetConditionsRating(TimeLocation timeLocation, Drone drone)
        {
            return FlySafeAlgorithm.RateWeather(_getStoredWeatherData(timeLocation), drone);
        }

        //Ocjenjiva i dohvaca vremenske podatke po Aleksa metodi
        public WeatherRating GetConditionsRatingByPostalCode(string postalCode, string state)
        {
            return FlySafeAlgorithm.RateWeather(_openWeatherApi.GetAlexaWeatherData(postalCode, state), null);
        }

        //Dohvacanje paketa procjena
        public List<WeatherRating> GetPrognosisForLocation(TimeLocation timeLocation)
        {
            var data = _openWeatherApi.GetForecastsPackageFromApi(timeLocation);
            var ratings = data.Select(wd => FlySafeAlgorithm.RateWeather(wd, null)).ToList();
            return ratings;
        }

        //Metoda koja osjezava pracene podatke o vremenu
        private void _refresh()
        {
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

        //Metoda koja uklanja mjesta-vremena koje vise nije potrebno pratiti
        private void _clearUnusedWeatherData()
        {
            _weatherData.ToList().ForEach(WR => { if (!_TLEntities.Any(TLE => TLE.TimeLocation.Equals(WR.TimeLocation))) _weatherData.Remove(WR); });
        }

        //Metoda koja pokrece mehanizam
        private void _startRefresher()
        {
            var startTimeSpan = TimeSpan.Zero;
            var periodTimeSpan = TimeSpan.FromMinutes(1.2);

            var timer = new System.Threading.Timer((e) =>
            {
                _refresh();
                _clearUnusedWeatherData();
            }, null, startTimeSpan, periodTimeSpan);
        }

        //Dohvacanje sljedecih n mjesta-vremena da se osvjeze po prioritetu toga koliko su davno osvjezeni
        private List<TLEntity> _getNextNEntities()
        {
            return _TLEntities.OrderBy(TLE => TLE.LastRefresh).Take(LogicParameters.NumberOfEntitesPerFetch).ToList();
        }

        //Dohvacanje pohranjenih podataka o vremenu
        private WeatherData _getStoredWeatherData(TimeLocation timeLocation)
        {
            if(_weatherData.FirstOrDefault(WR => WR.TimeLocation.Equals(timeLocation)) == null) AddTimeLocationToTrack(timeLocation);

            return _weatherData.FirstOrDefault(WR => WR.TimeLocation.Equals(timeLocation));
        }
    }
}