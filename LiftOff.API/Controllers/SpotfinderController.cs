using LiftOff.API.Logic;
using LiftOff.API.Logic.FlySafe;
using LiftOff.API.Models.Dynamic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    //Controller zaduzen za spotfinder funkcionalnost
    [RoutePrefix("api/spotfinder")]
    public class SpotfinderController : ApiController
    {
        //Ruta koja vraca najbolji rejting i njegovo mjesto i vrijeme u okolici odabrane lokacije
        [HttpPost]
        [Authorize]
        [Route("find-best-rating")]
        public IHttpActionResult GetBestRatingNearMe([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            return Ok(Spotfinder.Instance.GetBestWeatherRatingNearLocation(timeLocation));
        }
    }
}
