﻿using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using LiftOff.API.Models.Persistent;

namespace LiftOff.API.Data
{
	//Klasa zadužena za direktnu komunikaciju s bazom podataka
	public class LiftOffContext : IdentityDbContext<IdentityUser>
	{
        public LiftOffContext()
            : base("LiftOffDatabase")
        {
			//Početna inicijalizacija baze
            Database.SetInitializer(new LiftOffDatabaseInitialization());
        }

		//Slijedeći DbSetovi definiraju tablice koje će se pojaviti u bazi
        public virtual DbSet<Flight> Flights { get; set; }
        public virtual DbSet<Drone> Drones { get; set; }
        public virtual DbSet<FlightLocation> FlightLocations { get; set; }
        public virtual DbSet<FlightTime> FlightTimes { get; set; }
        public virtual DbSet<StatisticsUser> StatisticsUsers { get; set; }
        public virtual DbSet<NoFlyZone> NoFlyZones { get; set; }

		//Funkcija koja povezuje relacije između pojedinih tablica u bazi
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StatisticsUser>()
                 .HasMany(x => x.Flights);

            modelBuilder.Entity<StatisticsUser>()
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

            base.OnModelCreating(modelBuilder);
        }
    }
}