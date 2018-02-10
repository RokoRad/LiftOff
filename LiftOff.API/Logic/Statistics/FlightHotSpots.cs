using LiftOff.API.Data;
using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LiftOff.API.Logic.Statistics
{
	//Klasa zadužena za pronalazak letova blizu korisnika
	public class FlightHotSpots
    {
        private static readonly LiftOffContext _liftOffContext = new LiftOffContext();

		//Funkcija koja će vratiti letove koji su blizu dane lokacije uz uvjet da su stariji od jednog, a mlađi od 30 dana
        public static List<Flight> ExecuteQuery(TimeLocation timeLocation)
        {
            var time1 = DateTime.Now - LogicParameters.MinimumHotSpotsDataAge;
            var time2 = DateTime.Now - LogicParameters.MaximumHotSpotsDataAge;

            var flights = _liftOffContext
                            .Flights
                            .Where(fl => fl.User.ShowWhereIFly
                                   && fl.FlightTime.FlightStartTime < time1
                                   && fl.FlightTime.FlightStartTime > time2
                                   && Math.Abs(fl.FlightLocation.Latitude - timeLocation.Location.Latitude) < LogicParameters.HotSpotsLatitudeTolerance
                                   && Math.Abs(fl.FlightLocation.Longitude - timeLocation.Location.Longitude) < LogicParameters.HotSpotsLongitudeTolerance)
                            .ToList();

            return flights;
        }
    }
}