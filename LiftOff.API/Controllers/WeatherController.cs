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
using LiftOff.API.WeatherFetcher;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        private WeatherFetcher.WeatherFetcher _weatherFetcher;

        public WeatherController()
        {
            _weatherFetcher = new WeatherFetcher.WeatherFetcher();
        }

        [AllowAnonymous]
        [Route("get-all")]
        public IHttpActionResult Get()
        {
            OpenWeatherAPI openWeatherAPI = new OpenWeatherAPI();

            return Ok(openWeatherAPI.GetWeatherDataFromApi(new TimeLocation() { Location = new Coordinates() { Latitude = 1, Longitude = 1}, Time = new DateTime() }));
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("getScore")]
        public IHttpActionResult GetScore([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            _weatherFetcher.AddTimeLocationToTrack(timeLocation);

            return Ok(_weatherFetcher.getConditionsRating(_weatherFetcher.GetStoredWeatherData(timeLocation)));
        }
    }
}
