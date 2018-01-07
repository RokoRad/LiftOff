using LiftOff.API.Logic.Statistics;
using System;

namespace LiftOff.API.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public int TimeFlown { get; set; }
        public double FlySafeScore { get; set; }
        public DateTime FlightStartTime { get; set; }
        public Drone Drone { get; set; }
        public FlightLocation FlightLocation { get; set; }
        public int FlightLocationId { get; set; }
        public FlightTime FlightTime { get; set; }
        public int FlightTimeId { get; set; }

        public Flight(Flight flight)
        {
            User = flight.User;
            UserId = flight.UserId;
            TimeFlown = flight.TimeFlown;
            FlySafeScore = flight.FlySafeScore;
            FlightStartTime = flight.FlightStartTime;
            Drone = flight.Drone;
            FlightLocation = flight.FlightLocation;
            FlightLocationId = flight.FlightLocationId;
            FlightTime = flight.FlightTime;
            FlightTimeId = flight.FlightTimeId;
        }
    }
}