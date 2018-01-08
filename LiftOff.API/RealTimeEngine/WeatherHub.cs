using LiftOff.API.Logic;
using LiftOff.API.Models;
using Microsoft.AspNet.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiftOff.API.RealTimeEngine
{
	public class WeatherHub : Hub
	{
		private static List<WeatherGetter> _realTimeConnections = new List<WeatherGetter>();

		public void InitiateConnection(TimeLocation timeLocation, string units)
		{
            //debug
            timeLocation.Time = System.DateTime.Now;

            if (timeLocation.LocationIsValid() && timeLocation.TimeIsValid())
                _realTimeConnections.Add(new WeatherGetter(timeLocation, units, Context.ConnectionId));
		}

		public void UpdateLocation(TimeLocation newTimeLocation)
		{
            var clientWeatherGetter = _realTimeConnections.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId);

            LogicIO.UnregisterTrackedTimeLocation(clientWeatherGetter.GetClient().TimeLocation, _realTimeConnections);
            LogicIO.RegisterTimeLocationtoTrack(newTimeLocation);

            clientWeatherGetter.UpdateClientLocation(newTimeLocation);
		}

		public void ChangeUnits()
		{
			_realTimeConnections.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId).ChangeUnits();
		}

		public override Task OnDisconnected(bool stopCalled)
		{
            var clientTimeLocation = _realTimeConnections.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId).GetClient().TimeLocation;

            LogicIO.UnregisterTrackedTimeLocation(clientTimeLocation, _realTimeConnections);

            _realTimeConnections.RemoveAll(wg => wg.GetClient().ConnectionId == Context.ConnectionId);

			return base.OnDisconnected(stopCalled);
		}
	}
}