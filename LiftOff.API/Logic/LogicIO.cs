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
        public WeatherRating GetWeatherRating(TimeLocation timeLocation)
        {
            return WeatherFetcher.Instance.GetConditionsRating(timeLocation);
        }

        public void RegisterTimeLocationtoTrack(TimeLocation timeLocation)
        {
            WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);
        }

        public void UnregisterTrackedTimeLocation(TimeLocation timeLocation, List<WeatherGetter> realtimeConnections)
        {
            if (!realtimeConnections.Any(wg => wg.GetClient().TimeLocation.Equals(timeLocation)))
                WeatherFetcher.Instance.RemoveTimeLocationFromTracking(timeLocation);
        }
    }
}