using LiftOff.API.Data;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/logging")]
    public class LoggingController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();
        
        [HttpPost]
        //production
        //[Authorize]
        [Route("logFlight")]
        public IHttpActionResult LogFlight(Flight flight)
        {
            var userId = User.Identity.GetUserId();
            //production
            //var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            //testing
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.UserName == "aaa");

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
    }
}
