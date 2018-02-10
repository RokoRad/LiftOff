using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
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
    //Controller zaduzen za funkcionalnost flight hotspotova
    [RoutePrefix("api/flight-hotspots")]
    public class FlightHotSpotsController : ApiController
    {
        //Ruta koja korisniku vraća letove u blizini
        [HttpPost]
        [Authorize]
        [Route("get-flights-near-me")]
        public IHttpActionResult GetFlightsNearMe([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            List<Flight> flights = FlightHotSpots.ExecuteQuery(timeLocation);

            if (flights != null && flights.Count != 0)
                return Ok(flights);
            return Ok("no flights");
        }
    }
}
