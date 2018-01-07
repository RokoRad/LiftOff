using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations.Schema;
using LiftOff.API.Logic.Statistics;

namespace LiftOff.API.Models
{
	public class User
	{
		[Required]
		public string UserName { get; set; }

		[Required]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[Required]
		[DataType(DataType.EmailAddress)]
		public string Email { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        public int TotalTimeFlown { get; set; }
        public int TotalFlights { get; set; }
        public double TotalFlySafeScore { get; set; }
        public DateTime FavoriteFlightTime { get; set; }
        public FlightLocation FavoriteFlightLocation { get; set; }
        public ICollection<Flight> Flights { get; set; }
        public ICollection<Drone> Drones { get; set; }
        public ICollection<FlightLocation> FlightLocations { get; set; }
        public ICollection<FlightTime> FlightTimes { get; set; }

        public User()
        {
            TotalFlights = 0;
            TotalTimeFlown = 0;
            TotalFlySafeScore = 0;
            Flights = new HashSet<Flight>();
            Drones = new HashSet<Drone>();
        }
    }
}