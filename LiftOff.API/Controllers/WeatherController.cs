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

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        [AllowAnonymous]
        [Route("get-all")]
        public IHttpActionResult Get()
        {
            return Ok(RequestWeather());
        }

        public ResponseWeather RequestWeather()
        {
            string apiKey;
            string city;

            apiKey = "3939e3c3ea8f513efb798c6deb5f9857";
            city = "Sydney";

            HttpWebRequest apiRequest = WebRequest.Create(
                "http://api.openweathermap.org/data/2.5/weather?q=" + city 
                + "&appid=" + apiKey 
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
            string apiKey;

            apiKey = "3939e3c3ea8f513efb798c6deb5f9857";

            var requestString = "http://api.openweathermap.org/data/2.5/uvi?" + "appid=" + apiKey + "&lat=" + lat.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture) + "&lon=" + lon.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture);
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
