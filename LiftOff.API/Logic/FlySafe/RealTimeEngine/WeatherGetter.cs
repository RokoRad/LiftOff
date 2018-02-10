using LiftOff.API.Data;
using LiftOff.API.Logic;
using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Threading;

namespace LiftOff.API.Logic.FlySafe.RealTimeEngine
{
	//Klasa klijenta �iji objekt predstavlja vezu korisnika sa LiftOff real-timeom
	public class Client
	{
        public TimeLocation TimeLocation { get; set; }
        public Drone Drone { get; set; }

		public string Units { get; set; }
		public string ConnectionId { get; set; }

		public Client(TimeLocation timeLocation, string droneName, string units, string connectionId)
		{
            TimeLocation = timeLocation;
			Units = units;
			ConnectionId = connectionId;

            using (LiftOffRepo repo = new LiftOffRepo())
             { Drone = repo.GetDroneByName(droneName); }
		}
	}

	//Klasa koja sadr�i sve pretvorbe jedinica za "metric" i "imperial" sustave
    public class Conversions
    {
        public static double? ConvertToFahrenheit(double? celsius)
        {
            return (celsius.HasValue) ? celsius * 9 / 5 + 32 : null;
        }

        public static double? ConvertToCelzius(double? fahrenheit)
        {
            return (fahrenheit.HasValue) ? (fahrenheit - 32) * 5 / 9 : null;
        }

        public static double? ConvertToMiles(double? kilometers)
        {
            return (kilometers.HasValue) ? kilometers * 0.621371 : null;
        }

        public static double? ConvertToKilometers(double? miles)
        {
            return (miles.HasValue) ? miles * 1.60934 : null;
        }

        public static double? ConvertToFeet(double? meters)
        {
            return (meters.HasValue) ? meters * 3.28084 : null;
        }

        public static double? ConvertToMeters(double? feet)
        {
            return (feet.HasValue) ? feet * 0.3048 : null;
        }
    }

	//Klasa koja se je zadu�ena za serviranje podataka klijentu kad je to potrebno
	public class WeatherGetter
	{

		private readonly TimeSpan _updateCurrentWeatherInterval = TimeSpan.FromSeconds(1);
		private readonly Timer _currentWeatherTimer;
        private WeatherRating _currentWeatherRating = new WeatherRating();

        private Client Client;

		public WeatherGetter(TimeLocation timeLocation, string droneName, string units, string connectionId)
		{
            LogicIO.RegisterTimeLocationtoTrack(timeLocation);

			Clients = GlobalHost.ConnectionManager.GetHubContext<WeatherHub>().Clients;

			Client = new Client(timeLocation, droneName, units, connectionId);

            _currentWeatherTimer = new Timer(UpdateCurrentWeather, null, _updateCurrentWeatherInterval, _updateCurrentWeatherInterval);
		}

        private IHubConnectionContext<dynamic> Clients
		{
			get;
			set;
		}

		//Funkcija koja mijenja klijentovu lokaciju
		public void UpdateClientLocation(TimeLocation newTimeLocation)
		{
            Client.TimeLocation = newTimeLocation;
		}

        internal void UpdateClientDrone(string droneName)
        {
            using (LiftOffRepo repo = new LiftOffRepo())
            { Client.Drone = repo.GetDroneByName(droneName); }
        }

        //Funkcija koja mijenja klijentov sustav mjernih jedinica
        public void ChangeUnits()
		{
			if (Client.Units == "metric")
				Client.Units = "imperial";
			else
				Client.Units = "metric";
		}

		//Funkcija koja obavlja pretvorbu jedinica
        private WeatherRating ChangeUnits(WeatherRating weatherRating)
        {
            var newWeatherRating = weatherRating;

            if (weatherRating.WeatherData.Units == "metric")
            {
                newWeatherRating.WeatherData.Max_Temperature = Conversions.ConvertToFahrenheit(newWeatherRating.WeatherData.Max_Temperature);
                newWeatherRating.WeatherData.Min_Temperature = Conversions.ConvertToFahrenheit(newWeatherRating.WeatherData.Min_Temperature);

                newWeatherRating.WeatherData.Visibility = Conversions.ConvertToFeet(newWeatherRating.WeatherData.Visibility);

                newWeatherRating.WeatherData.WindSpeed = Conversions.ConvertToMiles(newWeatherRating.WeatherData.WindSpeed);

                newWeatherRating.WeatherData.Units = "imperial";
            }
            else if (weatherRating.WeatherData.Units == "imperial")
            {
                newWeatherRating.WeatherData.Max_Temperature = Conversions.ConvertToCelzius(newWeatherRating.WeatherData.Max_Temperature);
                newWeatherRating.WeatherData.Min_Temperature = Conversions.ConvertToCelzius(newWeatherRating.WeatherData.Min_Temperature);

                newWeatherRating.WeatherData.Visibility = Conversions.ConvertToMeters(newWeatherRating.WeatherData.Visibility);

                newWeatherRating.WeatherData.WindSpeed = Conversions.ConvertToKilometers(newWeatherRating.WeatherData.WindSpeed);

                newWeatherRating.WeatherData.Units = "metric";
            }

            return newWeatherRating;
        }

        public Client GetClient()
		{
			return Client;
		}

		//Funkcija koja klijentu �alje svje� rejting
        public void UpdateCurrentWeather(object state)
        {
            BroadcastCurrentWeatherToClient();
        }

		private void BroadcastCurrentWeatherToClient()
		{
            var weatherRating = LogicIO.GetWeatherRating(Client.TimeLocation, Client.Drone);

            if(!_currentWeatherRating.Equals(weatherRating) || _currentWeatherRating.WeatherData.Units != Client.Units)
            {
                _currentWeatherRating = weatherRating;

                if (weatherRating.WeatherData.Units != Client.Units)
                    weatherRating = ChangeUnits(weatherRating);

                Clients.Client(Client.ConnectionId).broadcastWeather(weatherRating);
            }
        }
    }
}