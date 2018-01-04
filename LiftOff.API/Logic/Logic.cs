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
    public static class Constants
    {
        public static double LatitudeLongitudeTolerance = 0.1;
        public static TimeSpan TimeTolerance = TimeSpan.FromHours(1);
    }

    public struct Coordinates
    {
        public double Latitude;
        public double Longitude;
    }

    public class TimeLocation
    {
        public Coordinates Location { get; set; }
        public DateTime Time { get; set; }

        public bool IsForecast { get { return (DateTime.Now - Time).Duration() < Constants.TimeTolerance; } }

        public bool Equals(TimeLocation timeLocation)
        {
            var sameLocation = Math.Abs(timeLocation.Location.Latitude - Location.Latitude) < Constants.LatitudeLongitudeTolerance && Math.Abs(timeLocation.Location.Longitude - Location.Longitude) < Constants.LatitudeLongitudeTolerance;
            var sameTime = (timeLocation.Time - Time).Duration() < Constants.TimeTolerance;
            return sameLocation && sameTime;
        }
    }

    public class TLEntity
    {
        public TimeLocation TimeLocation { get; set; }
        public DateTime LastRefresh { get; set; }
    }

    public class WeatherFetcher
    {
        public List<TLEntity> TLEntities { get; set; } = new List<TLEntity>();
        public List<ResponseWeather> WeatherResponses { get; set; } = new List<ResponseWeather>();
        private string _weatherApiKey = WebConfigurationManager.AppSettings["WeatherApiKey"];

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
                WeatherResponses.Add(GetWeather(timeLocation));
            }
        }

        public List<TLEntity> GetNext60TLEntities()
        {
            return TLEntities.OrderBy(TLE => TLE.LastRefresh).Take(60).ToList();
        }

        public void Refresh()
        {
            List<ResponseWeather> NewWeatherResponses = new List<ResponseWeather>();

            GetNext60TLEntities().ForEach(TLE => {
                NewWeatherResponses.Add(GetWeather(TLE.TimeLocation));
                TLE.LastRefresh = DateTime.Now;
            });

            for (int i = 0; i < WeatherResponses.Count(); i++)
                for (int j = 0; j < NewWeatherResponses.Count(); j++)
                    if (WeatherResponses[i].TimeLocation.Equals(NewWeatherResponses[j].TimeLocation))
                        WeatherResponses[i] = NewWeatherResponses[j];

            LastRefresh = DateTime.Now;

            System.Diagnostics.Debug.WriteLine("refreshed at " + LastRefresh);
        }

        public ResponseWeather GetWeather(TimeLocation timeLocation)
        {
            var res = RequestWeather(timeLocation);
            System.Diagnostics.Debug.WriteLine(res.Main.Temp);
            return res;
        }

        public ResponseWeather GetStoredWeatherData(TimeLocation timeLocation)
        {
            return WeatherResponses.First(WR => WR.TimeLocation.Equals(timeLocation));
        }

        public void ClearUnusedWeatherData()
        {
            WeatherResponses.ToList().ForEach(WR => { if (!TLEntities.Any(TLE => TLE.TimeLocation.Equals(WR.TimeLocation))) WeatherResponses.Remove(WR); });
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

        public ResponseWeather RequestWeather(TimeLocation timeLocation)
        {
            HttpWebRequest apiRequest = WebRequest.Create(
                "http://api.openweathermap.org/data/2.5/weather?"
                + "lat=" + timeLocation.Location.Latitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture)
                + "&lon=" + timeLocation.Location.Longitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture)
                + "&appid=" + "3939e3c3ea8f513efb798c6deb5f9857"
                + "&units=metric") as HttpWebRequest;

            string apiResponse = "";
            using (HttpWebResponse response = apiRequest.GetResponse() as HttpWebResponse)
            {
                StreamReader reader = new StreamReader(response.GetResponseStream());
                apiResponse = reader.ReadToEnd();
            }

            JObject json = JObject.Parse(apiResponse);
            ResponseWeather rootObject = JsonConvert.DeserializeObject<ResponseWeather>(apiResponse);


            if (json["rain"] != null) rootObject.Rain = new Rain { ThreeHours = json["rain"]["3h"].ToObject<int>() };
            if (json["snow"] != null) rootObject.Snow = new Snow { ThreeHours = json["snow"]["3h"].ToObject<int>() };
            rootObject.UV = RequestUV(rootObject.Coord.Lat, rootObject.Coord.Lon);
            rootObject.TimeLocation = timeLocation;

            return rootObject;
        }

        public UV RequestUV(double lat, double lon)
        {
            var requestString = "http://api.openweathermap.org/data/2.5/uvi?" + "appid=" + _weatherApiKey + "&lat=" + lat.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture) + "&lon=" + lon.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture);
            HttpWebRequest apiRequest = WebRequest.Create(requestString) as HttpWebRequest;

            string apiResponse = "";
            using (HttpWebResponse response = apiRequest.GetResponse() as HttpWebResponse)
            {
                StreamReader reader = new StreamReader(response.GetResponseStream());
                apiResponse = reader.ReadToEnd();
            }

            UV rootObject = JsonConvert.DeserializeObject<UV>(apiResponse);

            return rootObject;
        }

        public ConditionsRating getConditionsRating(ResponseWeather responseWeather)
        {
            return new ConditionsRating
            (
                new WindRating(responseWeather.Wind.Speed, responseWeather.Wind.Deg),
                new WeatherRating(responseWeather.Weather[0].Id, responseWeather.Weather[0].Main, responseWeather.Weather[0].Description),
                new VisibilityRating(responseWeather.Clouds.All, responseWeather.Visibility),
                new TemperatureRating(responseWeather.Main.Temp, responseWeather.Main.Temp_max, responseWeather.Main.Temp_min),
                new AtmosphereRating(responseWeather.Main.Humidity, responseWeather.Main.Pressure),
                new UVRating(responseWeather.UV.Value)
            );
        }
    }

    public class Rating
    {
        public double Score { get; set; }
    }

    public class ConditionsRating : Rating
    {
        public ConditionsRating(
            WindRating windRating, 
            WeatherRating weatherRating, 
            VisibilityRating visibilityRating, 
            TemperatureRating temperatureRating,
            AtmosphereRating atmosphereRating,
            UVRating uVRating)
        {
            WindRating = windRating;
            WeatherRating = weatherRating;
            VisibilityRating = visibilityRating;
            TemperatureRating = temperatureRating;
            AtmosphereRating = atmosphereRating;
            UVRating = uVRating;

            Ratings = new List<Rating>() { WindRating, WeatherRating, VisibilityRating, TemperatureRating, AtmosphereRating, UVRating };

            Score = Ratings.Average(r => r.Score);
        }

        List<Rating> Ratings { get; set; }
        public WindRating WindRating { get; set; }
        public WeatherRating WeatherRating { get; set; }
        public VisibilityRating VisibilityRating { get; set; }
        public TemperatureRating TemperatureRating { get; set; }
        public AtmosphereRating AtmosphereRating { get; set; }
        public UVRating UVRating { get; set; }
    }

    public class WindRating : Rating
    {
        public double Speed { get; set; }
        public double Direction { get; set; }

        public WindRating(double speed, double direction)
        {
            Speed = speed;
            Direction = direction;

            Score = 5.174242 - 0.1529221 * Speed - 0.00002164502 * Math.Pow(Speed, 2);
        }
    }

    public class WeatherRating : Rating
    {
        public int WeatherID { get; set; }
        public string Weather { get; set; }
        public string WeatherDescription { get; set; }

        public WeatherRating(int weatherId, string weather, string weatherDescription)
        {
            WeatherID = weatherId;
            Weather = weather;
            WeatherDescription = weatherDescription;

            Score = 4;
        }
    }

    public class VisibilityRating : Rating
    {
        public double Cloudiness { get; set; }
        public double Visibilty { get; set; }

        public VisibilityRating(double cloudiness, double visibility)
        {
            Cloudiness = cloudiness;
            Visibilty = visibility;

            Score = 0.0314211 + 0.7232571 * Visibilty - 0.02272055 * Math.Pow(Visibilty, 2);
        }
    }

    public class TemperatureRating : Rating
    {
        public double Temperature { get; set; }
        public double MaxTemperature { get; set; }
        public double MinTemperature { get; set; }

        public TemperatureRating(double temperature, double maxTemperature, double minTemperature)
        {
            Temperature = temperature;
            MaxTemperature = maxTemperature;
            MinTemperature = minTemperature;
            
            Score = -0.08571429 + 0.4571429 * Temperature - 0.01142857 * Math.Pow(Temperature, 2);
        }
    }

    public class AtmosphereRating : Rating
    {
        public double Humidity { get; set; }
        public double Pressure { get; set; }

        public AtmosphereRating(double humidity, double pressure)
        {
            Humidity = humidity;
            Pressure = pressure;

            Score = -1.533004 + (5.004633 - -1.533004) / Math.Pow((1 + (Humidity / 65.60188)), 2.798462);
        }
    }

    public class UVRating : Rating
    {
        public double UVIndex { get; set; }

        public UVRating(double uVIndex)
        {
            UVIndex = uVIndex;

            Score = -2748552 + (5.762977 - -2748552) / (1 + Math.Pow(UVIndex / 46487.38, 1.554429));
        }
    }
}