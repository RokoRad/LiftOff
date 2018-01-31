using LiftOff.API.Logic;
using LiftOff.API.Models;
using Microsoft.AspNet.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiftOff.API.RealTimeEngine
{
	//Klasa koja korisniku služi kao veza s LiftOff real-timeom
	public class WeatherHub : Hub
	{
		//Popis svih real-time veza
		private static List<WeatherGetter> _realTimeConnections = new List<WeatherGetter>();

		//Funkcija koja pokreće real-time vezu
		public void InitiateConnection(TimeLocation timeLocation, string units)
		{
            //debug
            //timeLocation.Time = System.DateTime.Now;

            if (timeLocation.LocationIsValid() && timeLocation.TimeIsValid())
                _realTimeConnections.Add(new WeatherGetter(timeLocation, units, Context.ConnectionId));
		}

		//Funkcija koja mijenja klijentovu lokaciju
		public void UpdateLocation(TimeLocation newTimeLocation)
		{
            var clientWeatherGetter = _realTimeConnections.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId);

            LogicIO.UnregisterTrackedTimeLocation(clientWeatherGetter.GetClient().TimeLocation, _realTimeConnections);
            LogicIO.RegisterTimeLocationtoTrack(newTimeLocation);

            clientWeatherGetter.UpdateClientLocation(newTimeLocation);
		}

		//Funkcija koja mijenja klijentov izbor mjernih jedinica
		public void ChangeUnits()
		{
			_realTimeConnections.First(wg => wg.GetClient().ConnectionId == Context.ConnectionId).ChangeUnits();
		}

		//Funkcija koja prekida real-time vezu
		public override Task OnDisconnected(bool stopCalled)
		{
            var clientConnection = _realTimeConnections.Where(wg => wg.GetClient().ConnectionId == Context.ConnectionId).DefaultIfEmpty(null).First();

            if (clientConnection != null) {
                var clientTimeLocation = clientConnection.GetClient().TimeLocation;

                LogicIO.UnregisterTrackedTimeLocation(clientTimeLocation, _realTimeConnections);

                _realTimeConnections.RemoveAll(wg => wg.GetClient().ConnectionId == Context.ConnectionId);
            }

            return base.OnDisconnected(stopCalled);
        }
    }
}