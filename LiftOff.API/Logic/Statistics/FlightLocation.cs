using LiftOff.API.Models;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LiftOff.API.Logic.Statistics
{
    public class FlightLocation
    {
        [ForeignKey("Flight")]
        public int FlightLocationId { get; set; }
        public string FlightSpot { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        [JsonIgnore]
        public virtual Flight Flight { get; set; }
        [JsonIgnore]
        public virtual StatisticsUser User { get; set; }
    }
}