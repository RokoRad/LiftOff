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
        private enum _openWeatherModes { json, xml}

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

		private WeatherData WeatherDataFromJObject(TimeLocation timeLocation, JObject weatherJson, JObject uviJson, JObject visibilityJson)
		{
            var Humidity = (double)weatherJson["main"]["humidity"];
            var Presssure = (double)weatherJson["main"]["pressure"];
            var Temperature = (double)weatherJson["main"]["temp"];
            var Max_Temperature = (double)weatherJson["main"]["temp_max"];
            var Min_Temperature = (double)weatherJson["main"]["temp_min"];
            var UVIndex = (double)uviJson["value"];
            var WindSpeed = (double)weatherJson["wind"]["speed"];
            var WindDirection = (double)weatherJson["wind"]["deg"];
            var WeatherID = (int)((weatherJson["weather"] as JArray).First() as JObject)["id"];
            var Weather = (string)((weatherJson["weather"] as JArray).First() as JObject)["main"];
            var WeatherDescription = (string)((weatherJson["weather"] as JArray).First() as JObject)["description"];
            var Visibility = (double)visibilityJson["current"]["visibility"]["@value"];
            var Cloudiness = (double)visibilityJson["current"]["clouds"]["@value"];

            return new WeatherData()
			{
				TimeLocation = timeLocation,

				Humidity            = (double)weatherJson["main"]["humidity"],
				Presssure           = (double)weatherJson["main"]["pressure"],
				Temperature         = (double)weatherJson["main"]["temp"],
				Max_Temperature     = (double)weatherJson["main"]["temp_max"],
				Min_Temperature     = (double)weatherJson["main"]["temp_min"],
				UVIndex             = (double)uviJson["value"],
				WindSpeed           = (double)weatherJson["wind"]["speed"],
				WindDirection       = (double)weatherJson["wind"]["deg"],
				WeatherID           = (int)((weatherJson["weather"] as JArray).First() as JObject)["id"],
				Weather             = (string)((weatherJson["weather"] as JArray).First() as JObject)["main"],
				WeatherDescription  = (string)((weatherJson["weather"] as JArray).First() as JObject)["description"],
				Visibility          = (double)visibilityJson["current"]["visibility"]["@value"],
			    Cloudiness          = (double)visibilityJson["current"]["clouds"]["@value"]
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

            var Humidity = (double)jWeatherData["main"]["humidity"];
            var Presssure = (double)jWeatherData["main"]["pressure"];
            var Temperature = (double)jWeatherData["main"]["temp"];
            var Max_Temperature = (double)jWeatherData["main"]["temp_max"];
            var Min_Temperature = (double)jWeatherData["main"]["temp_min"];
            var WindSpeed = (double)jWeatherData["wind"]["speed"];
            var WindDirection = (double)jWeatherData["wind"]["deg"];
            var WeatherID = (int)((jWeatherData["weather"] as JArray).First() as JObject)["id"];
            var Weather = (string)((jWeatherData["weather"] as JArray).First() as JObject)["main"];
            var WeatherDescription = (string)((jWeatherData["weather"] as JArray).First() as JObject)["description"];
            var Cloudiness = (double)jWeatherData["clouds"]["all"];

            return new WeatherData()
            {
                TimeLocation = timeLocation,

                Humidity = (double)jWeatherData["main"]["humidity"],
                Presssure = (double)jWeatherData["main"]["pressure"],
                Temperature = (double)jWeatherData["main"]["temp"],
                Max_Temperature = (double)jWeatherData["main"]["temp_max"],
                Min_Temperature = (double)jWeatherData["main"]["temp_min"],
                WindSpeed = (double)jWeatherData["wind"]["speed"],
                WindDirection = (double)jWeatherData["wind"]["deg"],
                WeatherID = (int)((jWeatherData["weather"] as JArray).First() as JObject)["id"],
                Weather = (string)((jWeatherData["weather"] as JArray).First() as JObject)["main"],
                WeatherDescription = (string)((jWeatherData["weather"] as JArray).First() as JObject)["description"],
                Cloudiness = (double)jWeatherData["clouds"]["all"],
            };
        }

        public static DateTime UnixTimeStampToDateTime(double unixTimeStamp)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dtDateTime;
        }
    }
}