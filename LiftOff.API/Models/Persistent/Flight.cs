using LiftOff.API.Data;
using LiftOff.API.Logic.Statistics;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace LiftOff.API.Models.Persistent
{
	//Klasa koja definira Flight objekt za bazu podataka
	public class Flight
    {
        public int Id { get; set; }

        public int TimeFlown { get; set; }
        public double FlySafeScore { get; set; }

        [Required]
        [JsonIgnore]
        public StatisticsUser User { get; set; }
        [JsonIgnore]
        public Guid UserId { get; set; }
        public Drone Drone { get; set; }
        [Required]
        public virtual FlightLocation FlightLocation { get; set; }
        [Required]
        public virtual FlightTime FlightTime { get; set; }

        public Flight() { }

        public Flight(Flight flight)
        {
            User = flight.User;
            TimeFlown = flight.TimeFlown;
            FlySafeScore = flight.FlySafeScore;
            Drone = new LiftOffContext().Drones.First(dr => dr.Name == flight.Drone.Name);
            FlightLocation = flight.FlightLocation;
            FlightTime = flight.FlightTime;
        }
    }
}