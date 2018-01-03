using LiftOff.Domain.Commands;
using Microsoft.AspNet.SignalR;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;

namespace LiftOff.API
{
    public class WeatherHub : Hub
    {
        private List<WeatherGetter> ClientWeatherGetters = new List<WeatherGetter>();

        public void InitiateConnection (string lat, string lon)
        {
            ClientWeatherGetters.Add(new WeatherGetter(lat, lon, Context.ConnectionId));
        }
    }
}