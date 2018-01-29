using System.Collections.Generic;

namespace LiftOff.API.Models
{
	//Klasa koja definira Drone objekt za bazu podataka
	public class Drone
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double TopSpeed { get; set; }

        public ICollection<StatisticsUser> Users { get; set; }
    }
}