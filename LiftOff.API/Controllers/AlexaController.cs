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
    [RoutePrefix("api/drones")]
    public class AlexaController : ApiController
    {
        [AllowAnonymous]
        [Route("getCurrentRating")]
        public string Get(JObject json)
        {
            var postalCode = (string)json["postalCode"];
            var state = (string)json["state"];

            var rating = WeatherFetcher.Instance.GetConditionsRatingByPostalCode(postalCode, state);

            string response = "The Flysafe Rating is " + rating.TotalRating + ". " + rating.AdvisoryRating.English;
            return response;
        }
    }
}