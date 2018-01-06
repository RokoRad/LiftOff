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
			//debug
			System.Diagnostics.Debug.WriteLine("got a Liftoff.api request for weather data");

			TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

			WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);

            var wr = WeatherFetcher.Instance.getConditionsRating(WeatherFetcher.Instance.GetStoredWeatherData(timeLocation));


            return Ok(wr);
		}
	}
}
