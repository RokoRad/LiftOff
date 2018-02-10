using LiftOff.API.Logic;
using LiftOff.API.Logic.Alexa;
using LiftOff.API.Models.Dynamic;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/alexa")]
    public class AlexaController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        [Route("get-current-rating")]
        public object GetRatingForAlexa(JObject json)
        {
            string postalCode = (string)json["postalCode"];
            string state = (string)json["countryCode"];

            WeatherRating rating = Weatherer.Instance.GetConditionsRatingByPostalCode(postalCode, state);
            string response = Alexa.AlexsizeRating(rating);

            return new { WeatherRatingString = response };
        }
    }
}
