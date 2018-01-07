using LiftOff.API.Data;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/logging")]
    public class LoggingController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();
        

        [HttpPost]
        [Route("logFlight")]
        public IHttpActionResult LogFlight(Flight flight)
        {
            //treba fix => mora dohvacat User ne IdentityUser
            var user = _liftOffContext.Users.First(usr => usr.Id == flight.UserId);

            User test = new User();
            test.TotalFlights++;
            test.TotalTimeFlown += flight.TimeFlown;
            test.TotalFlySafeScore += flight.FlySafeScore;
            test.FlightLocations.Add(flight.FlightLocation);
            test.FavoriteFlightLocation = StatisticsCalculator.CalculateFavoriteFlightLocation(test.FlightLocations.ToList());

            _liftOffContext.Flights.Add(new Flight(flight));

            return Ok(test);
        }
    }
}
