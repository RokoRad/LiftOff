using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace LiftOff.API.Logic
{
	public class OpenWeatherAPI
	{
		private readonly string _openWeatherAPIKey = "3939e3c3ea8f513efb798c6deb5f9857";
		private readonly string _openWeatherAPIURL = "http://api.openweathermap.org/data/2.5/[api]?lat=[lat]&lon=[lon]&units=metric&appid=[apikey]";
		private enum _openWeatherAPIs { weather, uvi }

		public WeatherData GetWeatherDataFromApi(TimeLocation timeLocation)
		{
			//debug
			System.Diagnostics.Debug.WriteLine("requested openweather server");

			return WeatherDataFromJObject(
				timeLocation,
				requestApi(_openWeatherAPIs.weather, timeLocation),
				requestApi(_openWeatherAPIs.uvi, timeLocation));
		}

		private JObject requestApi(_openWeatherAPIs api, TimeLocation timeLocation)
		{
			HttpWebRequest requestURL = WebRequest.Create(
					_openWeatherAPIURL
						.Replace("[apikey]", _openWeatherAPIKey)
						.Replace("[api]", api.ToString())
						.Replace("[lat]", timeLocation.Location.Latitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture))
						.Replace("[lon]", timeLocation.Location.Longitude.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture)))
				as HttpWebRequest;

			string apiResponse = "";
			using (HttpWebResponse response = requestURL.GetResponse() as HttpWebResponse)
			{
				StreamReader reader = new StreamReader(response.GetResponseStream());
				apiResponse = reader.ReadToEnd();
			}
			JObject json = JObject.Parse(apiResponse);

			return json;
		}

		private WeatherData WeatherDataFromJObject(TimeLocation timeLocation, JObject weatherJson, JObject uviJson)
		{
			return new WeatherData()
			{
				TimeLocation = timeLocation,

				Humidity = (double)weatherJson["main"]["humidity"],
				Presssure = (double)weatherJson["main"]["pressure"],
				Temperature = (double)weatherJson["main"]["temp"],
				Max_Temperature = (double)weatherJson["main"]["temp_max"],
				Min_Temperature = (double)weatherJson["main"]["temp_min"],
				UVIndex = (double)uviJson["value"],
				WindSpeed = (double)weatherJson["wind"]["speed"],
				WindDirection = (double)weatherJson["wind"]["deg"],
				WeatherID = (int)((weatherJson["weather"] as JArray).First() as JObject)["id"],
				Weather = (string)((weatherJson["weather"] as JArray).First() as JObject)["main"],
				Description = (string)((weatherJson["weather"] as JArray).First() as JObject)["description"]
				// Visibility = // TODO
				// Cloudiness = // TODO
			};
		}
	}
}