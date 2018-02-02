using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LiftOff.API.Logic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/alexa")]
    public class AlexaController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        [Route("getCurrentRating")]
        public object getCurrentRating(JObject json)
        {
            var postalCode = (string)json["postalCode"];
            var state = (string)json["countryCode"];

            var rating = WeatherFetcher.Instance.GetConditionsRatingByPostalCode(postalCode, state);

            string response = "The Flysafe Rating is " + (Math.Truncate(((double)rating.TotalRating) * 10) / 10)  + ". " + rating.AdvisoryRating.English;
            return new { WeatherRatingString = response };
        }
    }
}