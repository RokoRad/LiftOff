using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic
{
    public class SmartwatchPairer
    {
        public static readonly SmartwatchPairer Instance = new SmartwatchPairer();

        public SmartwatchPairer()
        {
            initiateListCleaner();
        }

        public static List<MobileDevice> RegisteredDevices = new List<MobileDevice>();

        public void RegisterMobileDevice(string deviceID, string token, string droneName)
        {
            object lockObj = new object();
            lock (lockObj)
            {
				RegisteredDevices.RemoveAll(rd => rd.DeviceID == deviceID);

				RegisteredDevices.Add(new MobileDevice()
                {
                    DeviceID = deviceID,
                    Token = token,
                    DroneName = droneName,
                    TimeRegistered = DateTime.Now,
                });
            }
        }

        public TokenDroneDTO GetRegisteredMobileDeviceInfo(string deviceID)
        {
            var device = RegisteredDevices.FirstOrDefault(d => d.DeviceID == deviceID);

            return new TokenDroneDTO { Token = device.Token, DroneName = device.DroneName };
        }

        public void initiateListCleaner()
        {
            var startTimeSpan = TimeSpan.Zero;
            var periodTimeSpan = TimeSpan.FromHours(1);

            var timer = new System.Threading.Timer((e) =>
            {
                RegisteredDevices.RemoveAll(x => DateTime.Now - x.TimeRegistered > TimeSpan.FromDays(1));
            }, null, startTimeSpan, periodTimeSpan);
        }
    }

    public struct MobileDevice
    {
        public string DeviceID { get; set; }
        public string Token { get; set; }
        public string DroneName { get; set; }
        public DateTime TimeRegistered { get; set; }
    }

    public struct TokenDroneDTO
    {
        public string Token { get; set; }
        public string DroneName { get; set; }
    }
}