using LiftOff.API.Logic.FlySafe.Algorithm;
using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.FlySafe
{
    public class Spotfinder
    {
        private static Spotfinder _instance;

        private Spotfinder() { }

        public static Spotfinder Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new Spotfinder();
                }
                return _instance;
            }
        }

        private OpenWeatherAPI _openWeatherApi = new OpenWeatherAPI();

        public WeatherRating GetBestWeatherRatingNearLocation(TimeLocation timeLocation)
        {
            List<WeatherData> WeatherDataNearLocation = new List<WeatherData>();

            for (int i = -LogicParameters.MapParseSize; i < LogicParameters.MapParseSize; i++)
                for (int j = -LogicParameters.MapParseSize; j < LogicParameters.MapParseSize; j++)
                    WeatherDataNearLocation.AddRange(_openWeatherApi.GetForecastsPackageFromApi(new TimeLocation()
                    {
                        Location = new Coordinates()
                        {
                            Latitude = timeLocation.Location.Latitude + LogicParameters.MapParseDensity.Latitude * i,
                            Longitude = timeLocation.Location.Longitude + LogicParameters.MapParseDensity.Longitude * j
                        },
                        Time = timeLocation.Time
                    }));

            List<WeatherRating> WeatherRatingsNearLocation = WeatherDataNearLocation.Select(WD => FlySafeAlgorithm.RateWeather(WD, null)).ToList();

            return WeatherRatingsNearLocation.OrderByDescending(WR => WR.TotalRating).First();
        }
    }
}