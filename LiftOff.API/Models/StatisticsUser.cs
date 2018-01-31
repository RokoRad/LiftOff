using LiftOff.API.Logic.Statistics;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LiftOff.API.Models
{
	//Klasa koja definira StatisticsUser objekt za bazu podataka
	public class StatisticsUser 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public int TotalTimeFlown { get; set; }
        public int TotalFlights { get; set; }
        public double TotalFlySafeScore { get; set; }
        public string FavoriteFlightTime { get; set; }
        public string FavoriteFlightSpot { get; set; }
        public string FavoriteDrone { get; set; }
        public bool ShowWhereIFly { get; set; } = true;
        [JsonIgnore]
        public virtual string IdentityUserId { get; set; }
        [JsonIgnore]
        public virtual ICollection<Flight> Flights { get; set; }
        [JsonIgnore]
        public virtual ICollection<Drone> Drones { get; set; }
        [JsonIgnore]
        public virtual ICollection<FlightLocation> FlightLocations { get; set; }
        [JsonIgnore]
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