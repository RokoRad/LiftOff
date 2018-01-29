using LiftOff.API.Data;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	//Controller zadužen za spremanje letova i funkcionalnosti koje idu uz to
    [RoutePrefix("api/logging")]
    public class LoggingController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();
        
		//Glavna funkcija koja sprema korisnikov let i kao rezultat vraća statistike koje su u skladu s novim letom
        [HttpPost]
        [Authorize]
        [Route("logFlight")]
        public IHttpActionResult LogFlight([FromBody]JObject json)
        {
            Flight flight = JsonConvert.DeserializeObject<Flight>(JsonConvert.SerializeObject(json));

            var userId = User.Identity.GetUserId();
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            var drone = _liftOffContext.Drones.FirstOrDefault(dr => dr.Name == flight.Drone.Name);

            user.TotalFlights++;
            user.TotalTimeFlown += flight.TimeFlown;
            user.TotalFlySafeScore += flight.FlySafeScore;
            user.FlightLocations.Add(flight.FlightLocation);
            user.FavoriteFlightSpot = StatisticsCalculator.CalculateFavoriteFlightLocation(user.FlightLocations.ToList());
            user.FlightTimes.Add(flight.FlightTime);
            user.FavoriteFlightTime = StatisticsCalculator.CalculateFavoriteFlightTime(user.FlightTimes.ToList()).ToString();
            user.Drones.Add(drone);
            user.FavoriteDrone = StatisticsCalculator.CalculateFavoriteDrone(user.Drones.ToList());

            flight.User = user;
            flight.Drone = drone;

            _liftOffContext.FlightLocations.Add(flight.FlightLocation);
            _liftOffContext.FlightTimes.Add(flight.FlightTime);
            _liftOffContext.Flights.Add(flight);

            _liftOffContext.SaveChanges();

            return Ok(user);
        }

		//Funkcija koja korisniku vraća sve njegove zapisane letove
        [HttpGet]
        [Authorize]
        [Route("getLogs")]
        public IHttpActionResult GetLogs()
        {
            var userId = User.Identity.GetUserId();
            var statsUserId = _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId).Id;

            var flights = _liftOffContext.Flights.Where(fl => fl.UserId == statsUserId).ToList();

            return Ok(flights);
        }

		//Funkcija koja u bazi mijenja korisnikovu odluku o pokazivanju letova drugim korinicima
		[HttpGet]
		[Authorize]
		[Route("showFlightsSwitch")]
		public IHttpActionResult ShowFlightsSwitch()
		{
			var userId = User.Identity.GetUserId();

			var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

			user.ShowWhereIFly = !user.ShowWhereIFly;

			return Ok();
		}
    }
}
