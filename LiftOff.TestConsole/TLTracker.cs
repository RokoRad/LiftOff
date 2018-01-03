using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace LiftOff.TestConsole
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
    
    public class WeatherLogic
    {
        public List<TLEntity> TLEntities { get; set; } = new List<TLEntity>();
        public List<ResponseWeather> WeatherResponses { get; set; } = new List<ResponseWeather>();

        public DateTime LastRefresh = new DateTime();

        public void AddTimeLocationToTrack(TimeLocation timeLocation)
        {
            if (!TLEntities.Any(TLE => TLE.TimeLocation.Equals(timeLocation)))
            {
                TLEntities.Add(new TLEntity { TimeLocation = timeLocation, LastRefresh = new DateTime()});
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
            } );

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
            var requestString = "http://api.openweathermap.org/data/2.5/uvi?" + "appid=" + "3939e3c3ea8f513efb798c6deb5f9857" + "&lat=" + lat.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture) + "&lon=" + lon.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture);
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
    }
}