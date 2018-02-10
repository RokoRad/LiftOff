﻿using LiftOff.API.Logic.FlySafe.Algorithm;
using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using LiftOff.API.Models.Persistent;
using System.Collections.Generic;
using System.Linq;

namespace LiftOff.API.Data
{
    //Repozitorij klasa koja služi kao posrednik između baze podataka i ostatka aplikacije
    public class LiftOffRepo : System.IDisposable
    {
        #region dependancy management

        private LiftOffContext _liftOffContext;

        public LiftOffRepo()
        {
            _liftOffContext = new LiftOffContext();
        }

        public void Dispose()
        {
            _liftOffContext.Dispose();
        }

        #endregion

        //Metoda koja vraća korisnikove statistike
        public StatisticsUser GetUserData(string userId)
        {
            return _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId);
        }

        //Metoda koja vraća listu dronova koji su spremljeni u bazi
        public List<Drone> GetDrones()
        {
            return _liftOffContext.Drones.ToList();
        }

        //Metoda koja ažurira korisnikovu statistiku u skladu s novim letom
        public StatisticsUser UpdateUserStats(Flight flight, string userId)
        {
            var user = _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId);

            var drone = _liftOffContext.Drones.FirstOrDefault(dr => dr.Name == flight.Drone.Name);

            user.TotalFlights++;
            user.TotalTimeFlown += flight.TimeFlown;
            user.TotalFlySafeScore += flight.FlySafeScore;
            user.FlightLocations.Add(flight.FlightLocation);
            user.FavoriteFlightSpot = StatisticsCalculator.CalculateFavoriteFlightLocation(user.FlightLocations.ToList());
            user.FlightTimes.Add(flight.FlightTime);
            user.FavoriteFlightTime = StatisticsCalculator.CalculateFavoriteFlightTime(user.FlightTimes.ToList()).ToString();
            user.Drones.Add(drone);
            user.FavoriteDrone = StatisticsCalculator.CalculateFavoriteDrone(user.Drones.ToList());

            flight.User = user;
            flight.Drone = drone;

            _liftOffContext.FlightLocations.Add(flight.FlightLocation);
            _liftOffContext.FlightTimes.Add(flight.FlightTime);
            _liftOffContext.Flights.Add(flight);

            _liftOffContext.SaveChanges();

            return user;
        }

        //Metoda koja vraća korisnikove spremljene letove
        public List<Flight> GetLogs(string userId)
        {
            var statsUserId = _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId).Id;

            var flights = _liftOffContext.Flights.Where(fl => fl.UserId == statsUserId).ToList();

            return flights;
        }

        //Metoda koja mijenja korisnikov izbor za pokazivanje leta ostalim korisnicima
        public void ShowFlightsSwitch(string userId)
        {
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            user.ShowWhereIFly = !user.ShowWhereIFly;
        }

        //Metoda koja dohvaca dosad registrane zone zabranjenog leta
        public List<NoFlyZone> GetNoFlyZones()
        {
            return _liftOffContext.NoFlyZones.ToList();
        }

        //Metoda koja dohvaca podatke o dronu na temelju imena drona
        public Drone GetDroneByName(string droneName)
        {
            return _liftOffContext.Drones.FirstOrDefault(d => d.Name == droneName);
        }
    }
}