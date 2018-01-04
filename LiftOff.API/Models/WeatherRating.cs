using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models
{
    public class Rating
    {
        public double Score { get; set; }
    }

    public class WeatherRating : Rating
    {
        public WeatherRating(
            WindRating windRating,
            ConditionsRating conditionsRating,
            VisibilityRating visibilityRating,
            TemperatureRating temperatureRating,
            AtmosphereRating atmosphereRating,
            UVRating uVRating)
        {
            WindRating = windRating;
            ConditionsRating = conditionsRating;
            VisibilityRating = visibilityRating;
            TemperatureRating = temperatureRating;
            AtmosphereRating = atmosphereRating;
            UVRating = uVRating;

            Ratings = new List<Rating>() { WindRating, ConditionsRating, VisibilityRating, TemperatureRating, AtmosphereRating, UVRating };

            Score = Ratings.Average(r => r.Score);
        }

        List<Rating> Ratings { get; set; }
        public WindRating WindRating { get; set; }
        public ConditionsRating ConditionsRating { get; set; }
        public VisibilityRating VisibilityRating { get; set; }
        public TemperatureRating TemperatureRating { get; set; }
        public AtmosphereRating AtmosphereRating { get; set; }
        public UVRating UVRating { get; set; }
    }

    public class WindRating : Rating
    {
        public double Speed { get; set; }
        public double Direction { get; set; }

        public WindRating(double speed, double direction)
        {
            Speed = speed;
            Direction = direction;

            Score = 5.174242 - 0.1529221 * Speed - 0.00002164502 * Math.Pow(Speed, 2);
        }
    }

    public class ConditionsRating : Rating
    {
        public int WeatherID { get; set; }
        public string Weather { get; set; }
        public string WeatherDescription { get; set; }

        public ConditionsRating(int weatherId, string weather, string weatherDescription)
        {
            WeatherID = weatherId;
            Weather = weather;
            WeatherDescription = weatherDescription;

            Score = 4;
        }
    }

    public class VisibilityRating : Rating
    {
        public double Cloudiness { get; set; }
        public double Visibilty { get; set; }

        public VisibilityRating(double cloudiness, double visibility)
        {
            Cloudiness = cloudiness;
            Visibilty = visibility;

            Score = 0.0314211 + 0.7232571 * Visibilty - 0.02272055 * Math.Pow(Visibilty, 2);
        }
    }

    public class TemperatureRating : Rating
    {
        public double Temperature { get; set; }
        public double MaxTemperature { get; set; }
        public double MinTemperature { get; set; }

        public TemperatureRating(double temperature, double maxTemperature, double minTemperature)
        {
            Temperature = temperature;
            MaxTemperature = maxTemperature;
            MinTemperature = minTemperature;

            Score = -0.08571429 + 0.4571429 * Temperature - 0.01142857 * Math.Pow(Temperature, 2);
        }
    }

    public class AtmosphereRating : Rating
    {
        public double Humidity { get; set; }
        public double Pressure { get; set; }

        public AtmosphereRating(double humidity, double pressure)
        {
            Humidity = humidity;
            Pressure = pressure;

            Score = 5.030759 - 0.01800218 * humidity - 0.0003456611 * Math.Pow(humidity, 2);
        }
    }

    public class UVRating : Rating
    {
        public double UVIndex { get; set; }

        public UVRating(double uVIndex)
        {
            UVIndex = uVIndex;

            Score = 5.110701 - 0.475967 * UVIndex + 0.008266248 * Math.Pow(UVIndex, 2);
        }
    }
}