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
		private enum _openWeatherAPIs { weather, uvi}
        private enum _openWeatherModes { json, xml}

		public WeatherData GetWeatherDataFromApi(TimeLocation timeLocation)
		{
			//debug
			System.Diagnostics.Debug.WriteLine("requested openweather server");

			return WeatherDataFromJObject(
				timeLocation,
				requestApi(_openWeatherAPIs.weather, _openWeatherModes.json, timeLocation),
				requestApi(_openWeatherAPIs.uvi, _openWeatherModes.json, timeLocation),
                requestApi(_openWeatherAPIs.weather, _openWeatherModes.xml, timeLocation)
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

            if (mode != _openWeatherModes.xml) json = JObject.Parse(apiResponse);
            else json = JObject.Parse(JsonConvert.SerializeObject(XDocument.Parse(apiResponse)));

            return json;
		}

		private WeatherData WeatherDataFromJObject(TimeLocation timeLocation, JObject weatherJson, JObject uviJson, JObject visibilityJson)
		{
            var TimeLocation = timeLocation;

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
	}
}