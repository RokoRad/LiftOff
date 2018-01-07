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

            return TimeOfDay.Afternoon;
        }
    }
}