using LiftOff.API.Models;
using LiftOff.API.RealTimeEngine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic
{
    public class LogicIO
    {
        public static WeatherRating GetWeatherRating(TimeLocation timeLocation)
        {
            return WeatherFetcher.Instance.GetConditionsRating(timeLocation);
        }

        public static void RegisterTimeLocationtoTrack(TimeLocation timeLocation)
        {
            WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);
        }

        public static void UnregisterTrackedTimeLocation(TimeLocation timeLocation, List<WeatherGetter> realtimeConnections)
        {
            object lockObj = new object();
            lock(lockObj)
            {
                if (!realtimeConnections.Any(wg => wg.GetClient().TimeLocation.Equals(timeLocation)))
                WeatherFetcher.Instance.RemoveTimeLocationFromTracking(timeLocation);
            }
            
        }
    }
}