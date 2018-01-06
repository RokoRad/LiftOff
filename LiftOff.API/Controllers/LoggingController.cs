using LiftOff.API.Data;
using LiftOff.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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

            _liftOffContext.Flights.Add(new Flight(flight));

            return Ok(test);
        }
    }
}
