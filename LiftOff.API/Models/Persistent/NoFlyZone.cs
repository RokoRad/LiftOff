using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Persistent
{
    //Klasa koja definira podatke nofly zone za bazu podataka
    public class NoFlyZone
    {
        public int Id { get; set; }

        public Coordinates Location { get; set; }
        public double Radius { get; set; }
    }
}