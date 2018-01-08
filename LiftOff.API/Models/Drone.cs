using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
    public class Drone
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double TopSpeed { get; set; }

        public ICollection<StatisticsUser> Users { get; set; }
    }
}