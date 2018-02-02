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

        public void RegisterMobileDevice(string deviceID, string token)
        {
            object lockObj = new object();
            lock (lockObj)
            { 
                RegisteredDevices.Add(new MobileDevice()
                {
                    DeviceID = deviceID,
                    Token = token,
                    TimeRegistered = DateTime.Now
                });
            }
        }

        public string GetRegisteredMobileDeviceToken(string deviceID)
        {
            return RegisteredDevices.FirstOrDefault(d => d.DeviceID == deviceID).Token;
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
        public DateTime TimeRegistered { get; set; }
    }
}