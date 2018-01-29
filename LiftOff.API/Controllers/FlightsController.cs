using LiftOff.API.Data;
using LiftOff.API.Logic.Flights;
using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	//Controller zadužen za funkcionalnosti vezane uz letove koji su zapisani u bazi
    [RoutePrefix("api/flights")]
    public class FlightsController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

		//Funkcija koja korisniku vraća letove u blizini
        [Authorize]
        [HttpPost]
        [Route("getFlightsNearMe")]
        public IHttpActionResult GetFlightsNearMe([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            var flights = GetFlightsNearMeQuery.Execute(timeLocation);

            if (flights != null && flights.Count != 0)
                return Ok(flights);
            else
                return Ok("no flights");
        }
    }
}
