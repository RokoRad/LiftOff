using LiftOff.API.Models;
using System.Collections.Generic;

namespace LiftOff.API.Logic.Statistics
{
    public class FlightLocation
    {
        public int Id { get; set; }
        public string FlightSpot { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public ICollection<Flight> Flights { get; set; }
    }
}