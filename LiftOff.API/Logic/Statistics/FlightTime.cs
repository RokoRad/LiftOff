using LiftOff.API.Models;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LiftOff.API.Logic.Statistics
{
	//Klasa koja definira FlightTime objekt za bazu podataka
	public class FlightTime
    {
        [ForeignKey("Flight")]
        public int FlightTimeId { get; set; }
        public DateTime FlightStartTime { get; set; }

        [JsonIgnore]
        public virtual Flight Flight { get; set; }
        [JsonIgnore]
        public virtual StatisticsUser User { get; set; }

        public FlightTime()
        {
            FlightStartTime = DateTime.Now;
        }
    }
}