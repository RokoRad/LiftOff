using LiftOff.API.Data;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    //Controller zadužen za spremanje letova i funkcionalnosti koje idu uz to
    [RoutePrefix("api/logging")]
    public class LoggingController : ApiController
    {
        private readonly RepoBridge _repoBridge = new RepoBridge();

		//Glavna ruta koja sprema korisnikov let i kao rezultat vraća statistike koje su u skladu s novim letom
        [HttpPost]
        [Authorize]
        [Route("logFlight")]
        public IHttpActionResult LogFlight([FromBody]JObject json)
        {
            Flight flight = JsonConvert.DeserializeObject<Flight>(JsonConvert.SerializeObject(json));

            var userId = User.Identity.GetUserId();
            

            return Ok(_repoBridge.UpdateUserStats(flight, userId));
        }

		//Ruta koja korisniku vraća sve njegove zapisane letove
        [HttpGet]
        [Authorize]
        [Route("getLogs")]
        public IHttpActionResult GetLogs()
        {
            var userId = User.Identity.GetUserId();
           
            return Ok(_repoBridge.GetLogs(userId));
        }

		//Ruta koja u bazi mijenja korisnikovu odluku o pokazivanju letova drugim korinicima
		[HttpGet]
		[Authorize]
		[Route("showFlightsSwitch")]
		public IHttpActionResult ShowFlightsSwitch()
		{
			var userId = User.Identity.GetUserId();

			return Ok();
		}
    }
}
