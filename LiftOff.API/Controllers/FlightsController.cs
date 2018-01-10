using LiftOff.API.Data;
using LiftOff.API.Logic.Flights;
using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/flights")]
    public class FlightsController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

        [Authorize]
        [HttpGet]
        [Route("getFlightsNearMe")]
        public IHttpActionResult GetFlightsNearMe([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            return Ok(GetFlightsNearMeQuery.Execute(timeLocation));
        }
    }
}
