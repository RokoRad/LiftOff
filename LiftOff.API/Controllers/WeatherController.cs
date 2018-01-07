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
using LiftOff.API.Logic;

namespace LiftOff.API.Controllers
{
	[RoutePrefix("api/weather")]
	public class WeatherController : ApiController
	{
		[AllowAnonymous]
		[HttpPost]
		[Route("getScore")]
		public IHttpActionResult GetScore([FromBody]JObject json)
		{
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid())     return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

			WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);
            var wd = WeatherFetcher.Instance.GetStoredWeatherData(timeLocation);
            var wr = WeatherFetcher.Instance.getConditionsRating(wd);
            WeatherFetcher.Instance.RemoveTimeLocationFromTracking(timeLocation);

            return Ok(wr);
		}
	}
}
