using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public TimeLocation TimeLocation { get; set; }
        public int TimeFlown { get; set; }
        public double FlySafeScore { get; set; }
        public DateTime FlightStartTime { get; set; }
        public Drone Drone { get; set; }

        public Flight(Flight flight)
        {
            User = flight.User;
            UserId = flight.UserId;
            TimeLocation = flight.TimeLocation;
            TimeFlown = flight.TimeFlown;
            FlySafeScore = flight.FlySafeScore;
            FlightStartTime = flight.FlightStartTime;
            Drone = flight.Drone;
        }
    }
}