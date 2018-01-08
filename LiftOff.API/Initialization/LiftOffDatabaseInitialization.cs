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

            var users = new List<StatisticsUser>()
            {
                new StatisticsUser()
                {
                    UserName = "aaa"
                },
                new StatisticsUser()
                {
                    UserName = "bbb"
                },
                new StatisticsUser()
                {
                    UserName = "ccc"
                },
                new StatisticsUser()
                {
                    UserName = "ddd"
                }
            };

            context.Drones.AddRange(drones);
            context.StatisticsUsers.AddRange(users);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}