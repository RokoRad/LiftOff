using LiftOff.Domain.Commands;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace LiftOff.API
{
    public class Client
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string ConnectionId { get; set; }

        public Client(string lat, string lon, string connectionId)
        {
            Latitude = lat;
            Longitude = lon;
            ConnectionId = connectionId;
        }
    }

    public class WeatherGetter
    {

        private readonly object _updateWeatherLock = new object();

        private volatile bool _updatingWeather = false;
        private readonly TimeSpan _updateInterval = TimeSpan.FromMinutes(10);
        private readonly Timer _timer;

        private Client Client;

        public WeatherGetter(string lat, string lon, string connectionId)
        {
            Clients = GlobalHost.ConnectionManager.GetHubContext<WeatherHub>().Clients;

            Client = new Client(lat, lon, connectionId);
            _timer = new Timer(UpdateWeather, null, _updateInterval, _updateInterval);
        }

        private IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }

        private void UpdateWeather(object state)
        {
            lock (_updateWeatherLock)
            {
                if (!_updatingWeather)
                {
                    _updatingWeather = true;

                    BroadcastWeatherToClient();

                    _updatingWeather = false;
                }
            }
        }

        private readonly GetWeatherCommand _getWeatherCommand = new GetWeatherCommand();

        private async void BroadcastWeatherToClient()
        {
            var response = await _getWeatherCommand.Execute(Client.Latitude, Client.Longitude);

            Clients.Client(Client.ConnectionId).broadcastWeather(response);
        }
    }
}