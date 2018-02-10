using LiftOff.API.Models;
using LiftOff.API.Models.Persistent;
using System.Collections.Generic;
using System.Linq;

namespace LiftOff.API.Logic.Statistics
{
	//Emumeracija doba dana
    public enum TimeOfDay
    {
        Morning,
        Afternoon,
        Night
    }

	//Klasa koja je zadužena za računanje pojedinih korisnikovih statistika
    public class StatisticsCalculator
    {
		//Funkcija koja vraća korisnikovu najdražu lokaciju za let
        public static string CalculateFavoriteFlightLocation(List<FlightLocation> flightLocations)
        {
            return flightLocations
                .GroupBy(fl => fl.FlightSpot)
                .OrderByDescending(fl => fl.Key.Count())
                .First().Key;
        }

		//Funkcija koja vraća korisnikovo najdraže vrijeme (doba dana iz enumeracije TimeOfDay) leta
        public static TimeOfDay CalculateFavoriteFlightTime(List<FlightTime> flightTimes)
        {
            var sortedTimes = 
                flightTimes
                .OrderBy(ft => ft.FlightStartTime.Hour)
                .ToList();

            var morningFlights = sortedTimes
                .TakeWhile(ft => ft.FlightStartTime.Hour <= 12)
                .ToList()
                .Count;

            var afternoonFlights =
                sortedTimes
                .SkipWhile(ft => ft.FlightStartTime.Hour <= 12)
                .ToList()
                .TakeWhile(ft => ft.FlightStartTime.Hour <= 19)
                .ToList()
                .Count;

            var nightFlights =
                sortedTimes
                .SkipWhile(ft => ft.FlightStartTime.Hour <= 19)
                .ToList()
                .Count;

            if (morningFlights > afternoonFlights && morningFlights > nightFlights)
                return TimeOfDay.Morning;
            else if (afternoonFlights > morningFlights && afternoonFlights > nightFlights)
                return TimeOfDay.Afternoon;
            else
                return TimeOfDay.Night;
        }

		//Funkcija koja vraća korisnikov najdraži dron za let
        public static string CalculateFavoriteDrone(List<Drone> drones) {
            return drones
                .GroupBy(drone => drone.Name)
                .OrderByDescending(drone => drone.Count())
                .First()
                .Key;
        }
    }
}