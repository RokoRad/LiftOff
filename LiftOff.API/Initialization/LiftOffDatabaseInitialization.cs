using LiftOff.API.Data;
using LiftOff.API.Models;
using System.Collections.Generic;
using System.Data.Entity;

namespace LiftOff.API.Initialization
{
	//Klasa zadužena za početnu inicijalizaciju baze podataka
	public class LiftOffDatabaseInitialization : DropCreateDatabaseIfModelChanges<LiftOffContext>
    {
        protected override void Seed(LiftOffContext context)
        {
			//Lista dronova koje LiftOff podržaje i koji se učitaju u bazu
            var drones = new List<Drone>()
            {
                new Drone()
                {
                    Name = "DJI Phantom 4 Pro",
                    TopSpeed = 72
                },
                new Drone()
                {
                    Name = "DJI Phantom 4 Advanced",
                    TopSpeed = 72
                },
                new Drone()
                {
                    Name = "DJI Phantom 3 SE",
                    TopSpeed = 57.6
                },
                new Drone()
                {
                    Name = "DJI Mavic Air",
                    TopSpeed = 68.4
                },
                new Drone()
                {
                    Name = "DJI Spark",
                    TopSpeed = 50
                },
                new Drone()
                {
                    Name = "DJI Mavic Pro",
                    TopSpeed = 65
                },
                new Drone()
                {
                    Name = "DJI Inspire 2",
                    TopSpeed = 94
                },
                new Drone()
                {
                    Name = "Yuneec Typhoon H Pro",
                    TopSpeed = 48.2
                },
                new Drone()
                {
                    Name = "Parrot Disco FPV",
                    TopSpeed = 80.5
                }
            };

            context.Drones.AddRange(drones);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}