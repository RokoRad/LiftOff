using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
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
    //Klasa zaduzena za pribavljanje vremenskih podataka
	public class OpenWeatherAPI
	{
		private readonly string _openWeatherAPIKey = LogicParameters.OpenWeatherAPIKey;
        private readonly string _openWeatherAPIURL = LogicParameters.OpenWeatherAPIURL;

		private enum _openWeatherAPIs { weather, uvi, forecast}
        private enum _openWeatherModes { json, xml, postal}

        //Osnovno dohvacanje seta vremenskih podataka
        public WeatherData GetWeatherDataFromApi(TimeLocation timeLocation)
        {
            //Vrse se razlicita dohvacanja ovisno radi li se o trenutnom stanju ili prognozi
            if (!timeLocation.IsForecast())
                return _weatherDataFromJObject(
                    timeLocation,
                    _requestApi(_openWeatherAPIs.weather, _openWeatherModes.json, timeLocation),
                    _requestApi(_openWeatherAPIs.uvi, _openWeatherModes.json, timeLocation),
                    _requestApi(_openWeatherAPIs.weather, _openWeatherModes.xml, timeLocation)
                );
            else
                return _weatherDataFromForecastJObject(
                    timeLocation,
                    _requestApi(_openWeatherAPIs.forecast, _openWeatherModes.json, timeLocation)
                );

        }

        //Dohvacanje veceg paketa prognoza
        public List<WeatherData> GetForecastsPackageFromApi(TimeLocation timeLocation)
        {
            return _weatherDataForecastsFromForecastJObject(
                timeLocation,
                _requestApi(_openWeatherAPIs.forecast, _openWeatherModes.json, timeLocation)
                );
        }

        //Dohvacanje po specificnoj metodi postanskog broja u skladu s Aleksom
        public WeatherData GetAlexaWeatherData(string postalCode, string state)
        {
            HttpWebRequest requestURL = WebRequest.Create(
                    "http://api.openweathermap.org/data/2.5/weather?zip=[postalCode],[state]&appid=[apikey]"
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

            return _weatherDataFromJObject(null, JObject.Parse(apiResponse), null, null);
        }

        //Metoda koji vrsi sami zahtjev ovisno o proslijedenim postavkama poziva
        private JObject _requestApi(_openWeatherAPIs api, _openWeatherModes mode, TimeLocation timeLocation)
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

        //pretvaranje JSON modela u C# objekt
        private T? _parseTo<T>(JObject fromObject, string[] keys) where T : struct
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
            return parsingToken.ToObject<T?>();
        }

        private string _parseToString(JObject fromObject, string[] keys)
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

        private DateTime _unixTimeStampToDateTime(double unixTimeStamp)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dtDateTime;
        }

        //Metoda koja spaja i parsira rezultate s vise izvora za trenutno vrijeme
        private WeatherData _weatherDataFromJObject(TimeLocation timeLocation, JObject weatherJson, JObject uviJson, JObject visibilityJson)
		{
            return new WeatherData()
			{
				TimeLocation = timeLocation,

				Humidity            = _parseTo<double>(weatherJson, new string[]{ "main", "humidity"}),
				Presssure           = _parseTo<double>(weatherJson, new string[] { "main", "pressure" }),
				Temperature         = _parseTo<double>(weatherJson, new string[] { "main", "temp" }),
				Max_Temperature     = _parseTo<double>(weatherJson, new string[] { "main", "temp_max" }),
				Min_Temperature     = _parseTo<double>(weatherJson, new string[] { "main", "temp_min" }),
				UVIndex             = _parseTo<double>(uviJson, new string[] { "value" }),
				WindSpeed           = _parseTo<double>(weatherJson, new string[] { "wind", "speed" }),
				WindDirection       = _parseTo<double>(weatherJson, new string[] { "wind", "deg" }),
				WeatherID           = _parseTo<int>((weatherJson["weather"] as JArray).First() as JObject, new string[] { "id" }),
				Weather             = _parseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "main" }),
				WeatherDescription  = _parseToString((weatherJson["weather"] as JArray).First() as JObject, new string[] { "description" }),
				Visibility          = _parseTo<double>(visibilityJson, new string[] { "current", "visibility", "@value" }),
			    Cloudiness          = _parseTo<double>(visibilityJson, new string[] { "current", "clouds", "@value" }),
                City                = _parseToString(weatherJson, new string[] { "name" }),
            };
		}

        //Metoda koja parsira rezultate za buduce vrijeme
        private WeatherData _weatherDataFromForecastJObject(TimeLocation timeLocation, JObject forecast)
        {
            JObject jWeatherData = new JObject();

            foreach (JToken JWeatherDataForecast in (forecast["list"] as JArray))
            {
                var jweatherforecasttime = _unixTimeStampToDateTime((double)(JWeatherDataForecast as JObject)["dt"]);
                var isequalbytimetodatetime = timeLocation.EqualsByTime(jweatherforecasttime);

                if (isequalbytimetodatetime) jWeatherData = JWeatherDataForecast as JObject;
            }

            return new WeatherData()
            {
                TimeLocation = timeLocation,

                Humidity = _parseTo<double>(jWeatherData, new string[] { "main", "humidity" }),
                Presssure = _parseTo<double>(jWeatherData, new string[] { "main", "pressure" }),
                Temperature = _parseTo<double>(jWeatherData, new string[] { "main", "temp" }),
                Max_Temperature = _parseTo<double>(jWeatherData, new string[] { "main", "temp_max" }),
                Min_Temperature = _parseTo<double>(jWeatherData, new string[] { "main", "temp_min" }),
                UVIndex = null,
                WindSpeed = _parseTo<double>(jWeatherData, new string[] { "wind", "speed" }),
                WindDirection = _parseTo<double>(jWeatherData, new string[] { "wind", "deg" }),
                WeatherID = _parseTo<int>((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "id" }),
                Weather = _parseToString((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "main" }),
                WeatherDescription = _parseToString((jWeatherData["weather"] as JArray).First() as JObject, new string[] { "description" }),
                Visibility = null,
                Cloudiness = _parseTo<double>(jWeatherData, new string[] { "clouds", "all" }),
                City = _parseToString(forecast, new string[] { "city", "name" })
            };
        }

        //Metoda koja parsira pakete rezultata
        private List<WeatherData> _weatherDataForecastsFromForecastJObject(TimeLocation timeLocation, JObject forecast)
        {
            List<WeatherData> WeatherDataForecasts = new List<WeatherData>();

            foreach (JObject JWeatherDataForecast in (forecast["list"] as JArray))
            {
                WeatherDataForecasts.Add(new WeatherData()
                {
                    TimeLocation = timeLocation,

                    Humidity = _parseTo<double>(JWeatherDataForecast, new string[] { "main", "humidity" }),
                    Presssure = _parseTo<double>(JWeatherDataForecast, new string[] { "main", "pressure" }),
                    Temperature = _parseTo<double>(JWeatherDataForecast, new string[] { "main", "temp" }),
                    Max_Temperature = _parseTo<double>(JWeatherDataForecast, new string[] { "main", "temp_max" }),
                    Min_Temperature = _parseTo<double>(JWeatherDataForecast, new string[] { "main", "temp_min" }),
                    UVIndex = null,
                    WindSpeed = _parseTo<double>(JWeatherDataForecast, new string[] { "wind", "speed" }),
                    WindDirection = _parseTo<double>(JWeatherDataForecast, new string[] { "wind", "deg" }),
                    WeatherID = _parseTo<int>((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "id" }),
                    Weather = _parseToString((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "main" }),
                    WeatherDescription = _parseToString((JWeatherDataForecast["weather"] as JArray).First() as JObject, new string[] { "description" }),
                    Visibility = null,
                    Cloudiness = _parseTo<double>(JWeatherDataForecast, new string[] { "clouds", "all" }),
                    City = _parseToString(forecast, new string[] { "city", "name" })
                });
            }

            return WeatherDataForecasts;
        }
    }
}