using LiftOff.API.Data;
using LiftOff.API.Logic.FlySafe.RealTimeEngine;
using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic
{
    public static class LogicIO
    {
        public static WeatherRating GetWeatherRating(TimeLocation timeLocation, Drone drone)
        {
            return Weatherer.Instance.GetConditionsRating(timeLocation, drone);
        }

        public static void RegisterTimeLocationtoTrack(TimeLocation timeLocation)
        {
            Weatherer.Instance.AddTimeLocationToTrack(timeLocation);
        }

        public static void UnregisterTrackedTimeLocation(TimeLocation timeLocation, List<WeatherGetter> realtimeConnections)
        {
            object lockObj = new object();
            lock(lockObj)
            {
                if (!realtimeConnections.Any(wg => wg.GetClient().TimeLocation.Equals(timeLocation)))
                Weatherer.Instance.RemoveTimeLocationFromTracking(timeLocation);
            }
        }
    }
}