using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Xml.Linq;

namespace LiftOff.API.Logic
{
	public class OpenWeatherAPI
	{
		private readonly string _openWeatherAPIKey = "3939e3c3ea8f513efb798c6deb5f9857";
		private readonly string _openWeatherAPIURL = "http://api.openweathermap.org/data/2.5/[api]?lat=[lat]&lon=[lon]&mode=[mode]&units=metric&appid=[apikey]";
		private enum _openWeatherAPIs { weather, uvi, forecast}
        private enum _openWeatherModes { json, xml, postal}

        public List<WeatherData> GetForecastsPackageFromApi(TimeLocation timeLocation)
        {
            return WeatherDataForecastsFromForecastJObject(
                timeLocation,
                requestApi(_openWeatherAPIs.forecast, _openWeatherModes.json, timeLocation)
                );
        }

		public WeatherData GetWeatherDataFromApi(TimeLocation timeLocation)
		{
			//debug
			System.Diagnostics.Debug.WriteLine("requested openweather server");

            var isforecast = timeLocation.IsForecast();

            if (!isforecast)
                return WeatherDataFromJObject(
                    timeLocation,
                    requestApi(_openWeatherAPIs.weather,  _openWeatherModes.json, timeLocation),
                    requestApi(_openWeatherAPIs.uvi,      _openWeatherModes.json, timeLocation),
                    requestApi(_openWeatherAPIs.weather,  _openWeatherModes.xml,  timeLocation)
                );
            else
                return WeatherDataFromForecastJObject(
                    timeLocation,
                    requestApi(_openWeatherAPIs.forecast, _openWeatherModes.json, timeLocation)
                );

		}

        public WeatherData GetAlexaWeatherData(string postalCode, string state)
        {
            HttpWebRequest requestURL = WebRequest.Create(
                    "api.openweathermap.org/data/2.5/weather?zip=[postalCode],[state]&appid=[apikey]"
                        .Replace("[apikey]", _openWeatherAPIKey)
                        .Replace("[postalCode]", postalCode)
                        .Replace("[state]", state))
                as HttpWebRequest;

            string apiResponse = "";
            using (HttpWebResponse response = requestURL.GetResponse() as HttpWebResponse)
            {
                StreamReader reader = new StreamReader(response.GetResponseStream());
                apiResponse = reader.ReadToEnd();
            }

            return WeatherDataFromJObject(null, JObject.Parse(apiResponse), null,null);
        }

		private JObject requestApi(_openWeatherAPIs api, _openWeatherModes mode, TimeLocation timeLocation)
		{
			HttpWebRequest requestURL = WebRequest.Create(
					_openWeatherAPIURL
						.Replace("[apikey]", _openWeatherAPIKey)
						.Replace("[api]", api.ToString())
						.Replace("[lat]", timeLocation.Location.Latitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture))
						.Replace("[lon]", timeLocation.Location.Longitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture))
                        .Replace("[mode]", mode.ToString()))
				as HttpWebRequest;


			string apiResponse = "";
			using (HttpWebResponse response = requestURL.GetResponse() as HttpWebResponse)
			{
				StreamReader reader = new StreamReader(response.GetResponseStream());
				apiResponse = reader.ReadToEnd();
			}


            JObject json;

            if (mode == _openWeatherModes.xml) json = JObject.Parse(JsonConvert.SerializeObject(XDocument.Parse(apiResponse)));
            else json = JObject.Parse(apiResponse);

            return json;
		}

        private T? ParseTo<T>(JObject fromObject, string[] keys) where T : struct
        {
            var parsingToken = fromObject as JToken;
            foreach (var key in keys)
                try
                {
                    parsingToken = parsingToken[key];
                }
                catch (Exception e)
                {
                    return null;
                }
            return parsingToken.ToObject<T?>();
        }

        private string ParseToString(JObject fromObject, string[] keys)
        {
            var parsingToken = fromObject as JToken;
            foreach (var key in keys)
                try
                {
                    parsingToken = parsingToken[key];
                }
                catch (Exception)
                {
                    return null;
                }
            return (string)parsingToken;
        }

		private WeatherData WeatherDataFromJObject(TimeLocation timeLocation, JObject weatherJson, JObject uviJson, JObject visibilityJson)
		{
            var Humidity           = ParseTo<double>(weatherJson, new string[]{ "main", "humidity"});
            var Presssure          = ParseTo<double>(weatherJson, new string[] { "main", "pressure" });
            var Temperature        = ParseTo<double>(weatherJson, new string[] { "main", "temp" });
            var Max_Temperature    = ParseTo<double>(weatherJson, new string[] { "main", "temp_max" });
            var Min_Temperature    = ParseTo<double>(weatherJson, new string[] { "main", "temp_min" });
            var UVIndex            = ParseTo<double>(uviJson, new string[] { "value" });
            var WindSpeed          = ParseTo<double>(weatherJson, new string[] { "wind", "speed" });
            var WindDirection      = ParseTo<double>(weatherJson, new string[] { "wind", "deg" });
            var WeatherID          = ParseTo<int>((weatherJson["weather"] as JArray).First() as JObject, new string[] { "id" });
            var Weather            = ParseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "main" });
            var WeatherDescription = ParseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "description" });
            var Visibility         = ParseTo<double>(visibilityJson, new string[] { "current", "visibility", "@value" });
            var Cloudiness         = ParseTo<double>(visibilityJson, new string[] { "current", "clouds", "@value" });
            var Name               = ParseToString(weatherJson, new string[] { "name" });

            return new WeatherData()
			{
				TimeLocation = timeLocation,

				Humidity            = ParseTo<double>(weatherJson, new string[]{ "main", "humidity"}),
				Presssure           = ParseTo<double>(weatherJson, new string[] { "main", "pressure" }),
				Temperature         = ParseTo<double>(weatherJson, new string[] { "main", "temp" }),
				Max_Temperature     = ParseTo<double>(weatherJson, new string[] { "main", "temp_max" }),
				Min_Temperature     = ParseTo<double>(weatherJson, new string[] { "main", "temp_min" }),
				UVIndex             = ParseTo<double>(uviJson, new string[] { "value" }),
				WindSpeed           = ParseTo<double>(weatherJson, new string[] { "wind", "speed" }),
				WindDirection       = ParseTo<double>(weatherJson, new string[] { "wind", "deg" }),
				WeatherID           = ParseTo<int>((weatherJson["weather"] as JArray).First() as JObject, new string[] { "id" }),
				Weather             = ParseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "main" }),
				WeatherDescription  = ParseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "description" }),
				Visibility          = ParseTo<double>(visibilityJson, new string[] { "current", "visibility", "@value" }),
			    Cloudiness          = ParseTo<double>(visibilityJson, new string[] { "current", "clouds", "@value" }),
                City                = ParseToString(weatherJson, new string[] { "name" }),
        };
		}

        public WeatherData WeatherDataFromForecastJObject(TimeLocation timeLocation, JObject forecast)
        {
            JObject jWeatherData = new JObject();

            foreach (JToken JWeatherDataForecast in (forecast["list"] as JArray))
            {
                var jweatherforecasttime = UnixTimeStampToDateTime((double)(JWeatherDataForecast as JObject)["dt"]);
                var isequalbytimetodatetime = timeLocation.EqualsByTime(jweatherforecasttime);

                if (isequalbytimetodatetime) jWeatherData = JWeatherDataForecast as JObject;
            }

            return new WeatherData()
            {
                TimeLocation = timeLocation,

                Humidity = ParseTo<double>(jWeatherData, new string[] { "main", "humidity" }),
                Presssure = ParseTo<double>(jWeatherData, new string[] { "main", "pressure" }),
                Temperature = ParseTo<double>(jWeatherData, new string[] { "main", "temp" }),
                Max_Temperature = ParseTo<double>(jWeatherData, new string[] { "main", "temp_max" }),
                Min_Temperature = ParseTo<double>(jWeatherData, new string[] { "main", "temp_min" }),
                UVIndex = null,
                WindSpeed = ParseTo<double>(jWeatherData, new string[] { "wind", "speed" }),
                WindDirection = ParseTo<double>(jWeatherData, new string[] { "wind", "deg" }),
                WeatherID = ParseTo<int>((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "id" }),
                Weather = ParseToString((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "main" }),
                WeatherDescription = ParseToString((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "description" }),
                Visibility = null,
                Cloudiness = ParseTo<double>(jWeatherData, new string[] { "clouds", "all" }),
                City = ParseToString(forecast, new string[] { "city", "name" })
            };
        }

        public List<WeatherData> WeatherDataForecastsFromForecastJObject(TimeLocation timeLocation, JObject forecast)
        {
            List<WeatherData> WeatherDataForecasts = new List<WeatherData>();

            foreach (JObject JWeatherDataForecast in (forecast["list"] as JArray))
            {
                WeatherDataForecasts.Add(new WeatherData()
                {
                    TimeLocation = timeLocation,

                    Humidity = ParseTo<double>(JWeatherDataForecast, new string[] { "main", "humidity" }),
                    Presssure = ParseTo<double>(JWeatherDataForecast, new string[] { "main", "pressure" }),
                    Temperature = ParseTo<double>(JWeatherDataForecast, new string[] { "main", "temp" }),
                    Max_Temperature = ParseTo<double>(JWeatherDataForecast, new string[] { "main", "temp_max" }),
                    Min_Temperature = ParseTo<double>(JWeatherDataForecast, new string[] { "main", "temp_min" }),
                    UVIndex = null,
                    WindSpeed = ParseTo<double>(JWeatherDataForecast, new string[] { "wind", "speed" }),
                    WindDirection = ParseTo<double>(JWeatherDataForecast, new string[] { "wind", "deg" }),
                    WeatherID = ParseTo<int>((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "id" }),
                    Weather = ParseToString((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "main" }),
                    WeatherDescription = ParseToString((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "description" }),
                    Visibility = null,
                    Cloudiness = ParseTo<double>(JWeatherDataForecast, new string[] { "clouds", "all" }),
                    City = ParseToString(forecast, new string[] { "city", "name" })
                });
            }

            return WeatherDataForecasts;
        }

        public static DateTime UnixTimeStampToDateTime(double unixTimeStamp)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dtDateTime;
        }
    }
}