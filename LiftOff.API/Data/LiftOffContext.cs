using LiftOff.API.Initialization;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LiftOff.API.Data
{
	public class LiftOffContext : IdentityDbContext<IdentityUser>
	{
        public LiftOffContext()
            : base("LiftOffDatabase")
        {
            Database.SetInitializer(new LiftOffDatabaseInitialization());
        }

        public virtual DbSet<Flight> Flights { get; set; }
        public virtual DbSet<Drone> Drones { get; set; }
        public virtual DbSet<FlightLocation> FlightLocations { get; set; }
        public virtual DbSet<FlightTime> FlightTimes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                 .HasMany(x => x.Flights);

            modelBuilder.Entity<User>()
                .HasMany(x => x.Drones)
                .WithMany(x => x.Users);

            modelBuilder.Entity<Drone>()
                .HasMany(x => x.Users)
                .WithMany(x => x.Drones);

            modelBuilder.Entity<Flight>()
                .HasRequired(x => x.User)
                .WithMany(x => x.Flights)
                .HasForeignKey(x => x.UserId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Flight>()
                .HasRequired(x => x.FlightLocation)
                .WithMany(x => x.Flights)
                .HasForeignKey(x => x.FlightLocationId)
                .WillCascadeOnDelete(true);



            base.OnModelCreating(modelBuilder);
        }
    }
}