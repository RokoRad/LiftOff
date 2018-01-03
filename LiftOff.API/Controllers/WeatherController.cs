using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LiftOff.API.App_Start;
using System.Web.Configuration;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        private string _weatherApiKey;

        public WeatherController()
        {
            _weatherApiKey = WebConfigurationManager.AppSettings["WeatherApiKey"];
        }

        [AllowAnonymous]
        [Route("get-all")]
        public IHttpActionResult Get()
        {
            return Ok(RequestWeather());
        }

        public ResponseWeather RequestWeather()
        {
            string city;
            city = "Sydney";

            HttpWebRequest apiRequest = WebRequest.Create(
                "http://api.openweathermap.org/data/2.5/weather?q=" + city 
                + "&appid=" + _weatherApiKey
                + "&units=metric") as HttpWebRequest;

            string apiResponse = "";
            using (HttpWebResponse response = apiRequest.GetResponse() as HttpWebResponse)
            {
                StreamReader reader = new StreamReader(response.GetResponseStream());
                apiResponse = reader.ReadToEnd();
            }

            JObject json = JObject.Parse(apiResponse);
            ResponseWeather rootObject = JsonConvert.DeserializeObject<ResponseWeather>(apiResponse);

            
            if(json["rain"] != null) rootObject.Rain = new Rain { ThreeHours = json["rain"]["3h"].ToObject<int>() };
            if(json["snow"] != null) rootObject.Snow = new Snow { ThreeHours = json["snow"]["3h"].ToObject<int>() };
            rootObject.UV = RequestUV(rootObject.Coord.Lat, rootObject.Coord.Lon);

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
    }
}
