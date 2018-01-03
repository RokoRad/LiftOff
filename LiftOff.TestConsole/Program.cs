using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LiftOff.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var logic = new WeatherLogic();

            logic.AddTimeLocationToTrack(new TimeLocation { Location = new Coordinates { Latitude = 51, Longitude = -0.1 } });
            logic.AddTimeLocationToTrack(new TimeLocation { Location = new Coordinates { Latitude = -33.8, Longitude = 151.2 } });
            logic.StartRefresher();

            Console.ReadLine();
        }
    }
}
