using LiftOff.API.Data;
using LiftOff.API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LiftOff.API.Initialization
{
    public class LiftOffDatabaseInitialization : DropCreateDatabaseIfModelChanges<LiftOffContext>
    {
        protected override void Seed(LiftOffContext context)
        {
            var drones = new List<Drone>()
            {
                new Drone()
                {
                    Name = "Dron 1",
                    TopSpeed = 10
                },
                new Drone()
                {
                    Name = "Dron 2",
                    TopSpeed = 12
                },
                new Drone()
                {
                    Name = "Dron 3",
                    TopSpeed = 14
                }
            };

            context.Drones.AddRange(drones);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}