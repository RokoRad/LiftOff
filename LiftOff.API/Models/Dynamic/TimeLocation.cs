using LiftOff.API.Logic;
using LiftOff.API.Logic.FlySafe.Algorithm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    public class TimeLocation
    {
        public Coordinates Location { get; set; }
        public DateTime Time { get; set; }

        public bool IsForecast()
        {
            return (DateTime.Now - Time).Duration() > LogicParameters.TimeTolerance;
        }

        public bool Equals(TimeLocation timeLocation)
        {
            var sameLocation = Math.Abs(timeLocation.Location.Latitude - Location.Latitude) < LogicParameters.LatitudeLongitudeTolerance && Math.Abs(timeLocation.Location.Longitude - Location.Longitude) < LogicParameters.LatitudeLongitudeTolerance;
            var sameTime = (timeLocation.Time - Time).Duration() < LogicParameters.TimeTolerance;
            return sameLocation && sameTime;
        }

        public bool EqualsByLocation(Coordinates coordinates)
        {
            return Math.Abs(coordinates.Latitude - Location.Latitude) < LogicParameters.LatitudeLongitudeTolerance && Math.Abs(coordinates.Longitude - Location.Longitude) < LogicParameters.LatitudeLongitudeTolerance;
        }

        public bool EqualsByTime(DateTime time)
        {
            return (time - Time).Duration() < LogicParameters.TimeTolerance;
        }

        public bool TimeIsValid()
        {
            return
                ((DateTime.Now - Time) <= LogicParameters.TimeTolerance) &&
                ((Time - DateTime.Now) <= TimeSpan.FromDays(5));

        }

        public bool LocationIsValid()
        {
            return
                Math.Abs(Location.Latitude) < 90 &&
                Math.Abs(Location.Longitude) < 180;
        }
    }
}