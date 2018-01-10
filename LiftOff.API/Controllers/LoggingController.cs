using LiftOff.API.Data;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/logging")]
    public class LoggingController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();
        
        [HttpPost]
        [Authorize]
        [Route("logFlight")]
        public IHttpActionResult LogFlight([FromBody]JObject json)
        {
            Flight flight = JsonConvert.DeserializeObject<Flight>(JsonConvert.SerializeObject(json));

            var userId = User.Identity.GetUserId();
            
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            user.TotalFlights++;
            user.TotalTimeFlown += flight.TimeFlown;
            user.TotalFlySafeScore += flight.FlySafeScore;
            user.FlightLocations.Add(flight.FlightLocation);
            user.FavoriteFlightSpot = StatisticsCalculator.CalculateFavoriteFlightLocation(user.FlightLocations.ToList());
            user.FlightTimes.Add(flight.FlightTime);
            user.FavoriteFlightTime = StatisticsCalculator.CalculateFavoriteFlightTime(user.FlightTimes.ToList()).ToString();

            flight.User = user;
            flight.Drone = _liftOffContext.Drones.FirstOrDefault(dr => dr.Name == flight.Drone.Name);

            _liftOffContext.FlightLocations.Add(flight.FlightLocation);
            _liftOffContext.FlightTimes.Add(flight.FlightTime);
            _liftOffContext.Flights.Add(flight);

            _liftOffContext.SaveChanges();

            return Ok(user);
        }

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

        //[HttpGet]
        //[Authorize]
        //[Route("getStats")]
        //public IHttpActionResult GetStats()
        //{
        //    var userId = User.Identity.GetUserId();

        //    var user = _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId);

        //    return Ok(user);
        //}
    }
}
