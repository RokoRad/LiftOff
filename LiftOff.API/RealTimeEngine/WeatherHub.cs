using Microsoft.AspNet.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiftOff.API.RealTimeEngine
{
	public class WeatherHub : Hub
	{
		private static List<WeatherGetter> ClientWeatherGetters = new List<WeatherGetter>();

		public void InitiateConnection(string lat, string lon)
		{
			ClientWeatherGetters.Add(new WeatherGetter(lat, lon, Context.ConnectionId));
		}

		public void UpdateLocation(string lat, string lon)
		{
			ClientWeatherGetters.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId).UpdateClientLocation(lat, lon);
		}

		public void ChangeUnits()
		{
			ClientWeatherGetters.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId).ChangeUnits();
		}

		public override Task OnDisconnected(bool stopCalled)
		{
			ClientWeatherGetters.RemoveAll(wg => wg.GetClient().ConnectionId == Context.ConnectionId);

			return base.OnDisconnected(stopCalled);
		}
	}
}