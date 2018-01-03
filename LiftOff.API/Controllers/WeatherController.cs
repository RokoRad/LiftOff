using LiftOff.API.Models;
using Newtonsoft.Json;
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
            city = "Split";

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

            ResponseWeather rootObject = JsonConvert.DeserializeObject<ResponseWeather>(apiResponse);

            return rootObject;
        }
    }
}
