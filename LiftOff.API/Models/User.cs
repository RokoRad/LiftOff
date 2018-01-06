using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations.Schema;

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
        public double AverageFlightTime { get; set; }
        public DateTime FavoriteFlightTime { get; set; }
        public double FavoriteFlightLocation_Latitude { get; set; }
        public double FavoriteFlightLocation_Longitude { get; set; }
        public ICollection<Flight> Flights { get; set; }
        public ICollection<Drone> Drones { get; set; }

        public User()
        {
            TotalTimeFlown = 0;
            AverageFlightTime = 0;
            FavoriteFlightTime = new DateTime();
            FavoriteFlightLocation_Latitude = 0;
            FavoriteFlightLocation_Longitude = 0;
            Flights = new HashSet<Flight>();
            Drones = new HashSet<Drone>();
        }
    }
}