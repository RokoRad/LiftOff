using LiftOff.API.Data;
using LiftOff.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.Flights
{
    public class GetFlightsNearMeQuery
    {
        private static readonly LiftOffContext _liftOffContext = new LiftOffContext();

        public static List<Flight> Execute(TimeLocation timeLocation)
        {
            var flights = _liftOffContext
                            .Flights
                            .Where(fl => fl.User.ShowWhereIFly
                                   && fl.FlightTime.FlightStartTime < DateTime.Now - TimeSpan.FromDays(1)
                                   && fl.FlightTime.FlightStartTime > DateTime.Now - TimeSpan.FromDays(30)
                                   && Math.Abs(fl.FlightLocation.Latitude - timeLocation.Location.Latitude) < 0.45045045
                                   && Math.Abs(fl.FlightLocation.Longitude - timeLocation.Location.Longitude) < 0.720388433)
                            .ToList();

            return flights;
        }
    }
}