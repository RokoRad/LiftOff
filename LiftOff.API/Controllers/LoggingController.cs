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
        [Authorize]
        [Route("logFlight")]
        public IHttpActionResult LogFlight(Flight flight)
        {
            //treba fix => mora dohvacat User ne IdentityUser
            //var user = _liftOffContext.Users.First(usr => usr.Id == flight.UserId);

            var userID = User.Identity.GetUserId();

            var test = _liftOffContext.StatisticsUsers.First(usr => usr.UserName == "aaa");
            test.TotalFlights++;
            test.TotalTimeFlown += flight.TimeFlown;
            test.TotalFlySafeScore += flight.FlySafeScore;
            test.FlightLocations.Add(flight.FlightLocation);
            test.FavoriteFlightSpot = StatisticsCalculator.CalculateFavoriteFlightLocation(test.FlightLocations.ToList());
            test.FlightTimes.Add(flight.FlightTime);
            test.FavoriteFlightTime = StatisticsCalculator.CalculateFavoriteFlightTime(test.FlightTimes.ToList()).ToString();

            flight.User = test;

            _liftOffContext.FlightLocations.Add(flight.FlightLocation);
            _liftOffContext.FlightTimes.Add(flight.FlightTime);
            _liftOffContext.Flights.Add(flight);

            _liftOffContext.SaveChanges();

            return Ok(test);
        }
    }
}
