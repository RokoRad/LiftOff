using System.Collections.Generic;
using System.Linq;

namespace LiftOff.API.Logic.Statistics
{
    public enum TimeOfDay
    {
        Morning,
        Afternoon,
        Night
    }

    public class StatisticsCalculator
    {
        public static string CalculateFavoriteFlightLocation(List<FlightLocation> flightLocations)
        {
            return flightLocations
                .GroupBy(fl => fl.FlightSpot)
                .OrderByDescending(fl => fl.Key.Count())
                .First().Key;
        }

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
    }
}