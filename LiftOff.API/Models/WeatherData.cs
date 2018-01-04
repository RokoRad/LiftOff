using LiftOff.API.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
    public class WeatherData
    {
        public TimeLocation TimeLocation { get; set; }

        public double Humidity           { get; set; }
        public double Presssure          { get; set; }
        public double Temperature        { get; set; }
        public double Max_Temperature    { get; set; }
        public double Min_Temperature    { get; set; }
        public double Visibility         { get; set; }
        public double Cloudiness         { get; set; }
        public double UVIndex            { get; set; }
        public double WindSpeed          { get; set; }
        public double WindDirection      { get; set; }
        public int    WeatherID          { get; set; }
        public string Weather            { get; set; }
        public string Description        { get; set; }
    }

    public class TimeLocation
    {
        public Coordinates Location { get; set; }
        public DateTime Time { get; set; }

        public bool IsForecast()
        {
            return (DateTime.Now - Time).Duration() < Constants.TimeTolerance;
        }

        public bool Equals(TimeLocation timeLocation)
        {
            var sameLocation = Math.Abs(timeLocation.Location.Latitude - Location.Latitude) < Constants.LatitudeLongitudeTolerance && Math.Abs(timeLocation.Location.Longitude - Location.Longitude) < Constants.LatitudeLongitudeTolerance;
            var sameTime = (timeLocation.Time - Time).Duration() < Constants.TimeTolerance;
            return sameLocation && sameTime;
        }
    }

    public struct Coordinates
    {
        public double Latitude;
        public double Longitude;
    }
}