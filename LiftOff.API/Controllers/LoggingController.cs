using LiftOff.API.Data;
using LiftOff.API.Models;
using LiftOff.API.Models.Persistent;
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
        #region Dependancy management

        private LiftOffRepo _liftOffRepo;

        public LoggingController()
        {
            _liftOffRepo = new LiftOffRepo();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _liftOffRepo.Dispose();
            }

            base.Dispose(disposing);
        }

        #endregion

        //Glavna ruta koja sprema korisnikov let i kao rezultat vraća statistike koje su u skladu s novim letom
        [HttpPost]
        [Authorize]
        [Route("log-flight")]
        public IHttpActionResult LogFlight([FromBody]JObject json)
        {
            Flight flight = JsonConvert.DeserializeObject<Flight>(JsonConvert.SerializeObject(json));

            var userId = User.Identity.GetUserId();
           
            return Ok(_liftOffRepo.UpdateUserStats(flight, userId));
        }

		//Ruta koja korisniku vraća sve njegove zapisane letove
        [HttpGet]
        [Authorize]
        [Route("get-logs")]
        public IHttpActionResult GetLogs()
        {
            var userId = User.Identity.GetUserId();
           
            return Ok(_liftOffRepo.GetLogs(userId));
        }

		//Ruta koja u bazi mijenja korisnikovu odluku o pokazivanju letova drugim korinicima
		[HttpGet]
		[Authorize]
		[Route("show-flights-switch")]
		public IHttpActionResult ShowFlightsSwitch()
		{
			var userId = User.Identity.GetUserId();

            _liftOffRepo.ShowFlightsSwitch(userId);

            return Ok();
		}
    }
}
