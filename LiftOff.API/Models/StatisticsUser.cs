using LiftOff.API.Logic.Statistics;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LiftOff.API.Models
{
    public class StatisticsUser 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public int TotalTimeFlown { get; set; }
        public int TotalFlights { get; set; }
        public double TotalFlySafeScore { get; set; }
        public string FavoriteFlightTime { get; set; }
        public string FavoriteFlightSpot { get; set; }
        
        public virtual string IdentityUserId { get; set; }
        public virtual ICollection<Flight> Flights { get; set; }
        public virtual ICollection<Drone> Drones { get; set; }
        public virtual ICollection<FlightLocation> FlightLocations { get; set; }
        public virtual ICollection<FlightTime> FlightTimes { get; set; }

        public StatisticsUser()
        {
            Id = Guid.NewGuid();
            TotalFlights = 0;
            TotalTimeFlown = 0;
            TotalFlySafeScore = 0;
            FavoriteFlightTime = "";
            FavoriteFlightSpot = "";

            Flights = new HashSet<Flight>();
            Drones = new HashSet<Drone>();
            FlightLocations = new HashSet<FlightLocation>();
            FlightTimes = new HashSet<FlightTime>();
        }
    }
}