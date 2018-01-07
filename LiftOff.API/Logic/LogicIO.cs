using LiftOff.API.Models;
using LiftOff.API.RealTimeEngine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic
{
    public static class LogicIO
    {
        private static void _validateTimeLocation(TimeLocation timeLocation)
        {
            if (!timeLocation.TimeIsValid()) throw new Exception("Time requested is not valid");
            if (!timeLocation.LocationIsValid()) throw new Exception("Location requested is not valid");
        }

        public static WeatherRating GetWeatherRating(TimeLocation timeLocation)
        {
            _validateTimeLocation(timeLocation);

            return WeatherFetcher.Instance.GetConditionsRating(timeLocation);
        }

        public static void RegisterTimeLocationtoTrack(TimeLocation timeLocation)
        {
            _validateTimeLocation(timeLocation);

            WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);
        }

        public static void UnregisterTrackedTimeLocation(TimeLocation timeLocation, List<WeatherGetter> realtimeConnections)
        {
            _validateTimeLocation(timeLocation);

            object lockObj = new object();
            lock(lockObj)
            {
                if (!realtimeConnections.Any(wg => wg.GetClient().TimeLocation.Equals(timeLocation)))
                WeatherFetcher.Instance.RemoveTimeLocationFromTracking(timeLocation);
            }
        }
    }
}