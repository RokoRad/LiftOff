﻿using LiftOff.API.Logic.Statistics;
using LiftOff.API.Models;
using System.Collections.Generic;
using System.Linq;

namespace LiftOff.API.Data
{
    //Klasa koja služi kao posrednik između baze podataka i ostatka aplikacije
    public class RepoBridge
    {
        private readonly LiftOffContext _liftOffContext;

        public RepoBridge()
        {
            _liftOffContext = new LiftOffContext();
        }

        //Funkcija koja vraća korisnikove statistike
        public StatisticsUser GetUserData(string userId)
        {
            return _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);
        }

        //Funkcija koja vraća listu dronova koji su spremljeni u bazi
        public List<Drone> GetDrones()
        {
            return _liftOffContext.Drones.ToList();
        }

        //Funkcija koja ažurira korisnikovu statistiku u skladu s novim letom
        public StatisticsUser UpdateUserStats(Flight flight, string userId)
        {
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

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

        //Funkcija koja vraća korisnikove spremljene letove
        public List<Flight> GetLogs(string userId)
        {
            var statsUserId = _liftOffContext.StatisticsUsers.FirstOrDefault(usr => usr.IdentityUserId == userId).Id;

            var flights = _liftOffContext.Flights.Where(fl => fl.UserId == statsUserId).ToList();

            return flights;
        }

        //Funkcija koja mijenja korisnikov izbor za pokazivanje leta ostalim korisnicima
        public void ShowFlightsSwitch(string userId)
        {
            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            user.ShowWhereIFly = !user.ShowWhereIFly;
        }
    }
}