using LiftOff.Domain.Commands;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Threading;

namespace LiftOff.API.RealTimeEngine
{
	public class Client
	{
		public string Latitude { get; set; }
		public string Longitude { get; set; }
		public string Units { get; set; }
		public string ConnectionId { get; set; }

		public Client(string lat, string lon, string units, string connectionId)
		{
			Latitude = lat;
			Longitude = lon;
			Units = units;
			ConnectionId = connectionId;
		}
	}

	public class WeatherGetter
	{

		private readonly object _updateCurrentWeatherLock = new object();
		private volatile bool _updatingCurrentWeather = false;
		private readonly TimeSpan _updateCurrentWeatherInterval = TimeSpan.FromMinutes(1);
		private readonly Timer _currentWeatherTimer;

		private readonly object _updateFiveDayForecastLock = new object();
		private volatile bool _updatingFiveDayForecast = false;
		private readonly TimeSpan _updateFiveDayForecastInterval = TimeSpan.FromMinutes(30);
		private readonly Timer _fiveDayForecastTimer;

		private readonly GetWeatherCommand _getWeatherCommand = new GetWeatherCommand();
		private readonly GetFiveDayForecastCommand _getFiveDayForecastCommand = new GetFiveDayForecastCommand();

		private Client Client;

		public WeatherGetter(string lat, string lon, string connectionId)
		{
			Clients = GlobalHost.ConnectionManager.GetHubContext<WeatherHub>().Clients;

			Client = new Client(lat, lon, "metric", connectionId);
			_currentWeatherTimer = new Timer(UpdateCurrentWeather, null, _updateCurrentWeatherInterval, _updateCurrentWeatherInterval);
			_fiveDayForecastTimer = new Timer(UpdateFiveDayForecast, null, _updateFiveDayForecastInterval, _updateFiveDayForecastInterval);
		}

		private IHubConnectionContext<dynamic> Clients
		{
			get;
			set;
		}

		public void UpdateClientLocation(string lat, string lon)
		{
			Client.Latitude = lat;
			Client.Longitude = lon;
		}

		public void ChangeUnits()
		{
			if (Client.Units == "metric")
				Client.Units = "imperial";
			else
				Client.Units = "metric";
		}

		public Client GetClient()
		{
			return Client;
		}

		private void UpdateCurrentWeather(object state)
		{
			lock (_updateCurrentWeatherLock)
			{
				if (!_updatingCurrentWeather)
				{
					_updatingCurrentWeather = true;

					BroadcastCurrentWeatherToClient();

					_updatingCurrentWeather = false;
				}
			}
		}

		private void UpdateFiveDayForecast(object state)
		{
			lock (_updateFiveDayForecastLock)
			{
				if (!_updatingFiveDayForecast)
				{
					_updatingFiveDayForecast = true;

					BroadcastFiveDayForecastToClient();

					_updatingFiveDayForecast = false;
				}
			}
		}

		private async void BroadcastCurrentWeatherToClient()
		{
			var response = await _getWeatherCommand.Execute(Client.Latitude, Client.Longitude, Client.Units);

			Clients.Client(Client.ConnectionId).broadcastWeather(response);
		}

		private async void BroadcastFiveDayForecastToClient()
		{
			var response = await _getFiveDayForecastCommand.Execute(Client.Latitude, Client.Longitude, Client.Units);

			Clients.Client(Client.ConnectionId).broadcastFiveDayForecast(response);
		}
	}
}